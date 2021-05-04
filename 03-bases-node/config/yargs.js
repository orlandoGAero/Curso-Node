const argv = require('yargs')
                .option('b', {
                    alias: 'base',
                    demandOption: true,
                    type: 'number',
                    describe: 'Es la base de la tabla de multiplicar'
                })
                .option('l', {
                    alias: 'listar',
                    type: 'boolean',
                    default: false,
                    describe: 'Muestra tabla en consola'
                })
                .option('h', {
                    alias: 'hasta',
                    type: 'number',
                    default: 10,
                    describe: 'Limita hasta que número se hara la multiplicación'
                })
                .check( (argv,options) => {
                    if(isNaN(argv.b)) {
                        throw 'La base debe ser un número'
                    }

                    if(isNaN(argv.h)) {
                        throw 'El limite debe ser un número'
                    }
                    return true;
                })
                .argv;

module.exports = argv;
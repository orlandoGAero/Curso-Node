const argv = require('./config/yargs');
require('colors');
const { crearArchivo} = require('./helpers/multiplicar');

console.clear();

// forma anterior
// const [, , arg3 = 'base=5'] = process.argv;
// const [, base = 5] = arg3.split('=');

// console.log(argv);

const base = argv.b;
const listar = argv.l;
const limite = argv.h;

crearArchivo(base,listar,limite)
    .then(archivo => console.log(`Archivo ${archivo} creado`.cyan.italic))
    .catch(err => console.log(`(Error: ${err})`.red))






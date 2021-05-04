const fs = require('fs');
const colors = require('colors');

const crearArchivo = async (base = 5, listar = false, limite = 10) => {

    try {
        
        let consola = '';
        let salida = '';
    
        salida += '====================\n';
        salida += `|    Tabla del ${base}   |\n`;
        salida += '====================\n';
        for(let i = 1; i <= limite; i++) {
            salida += `|  ${base} x ${i} = ${base * i}\n`;
            consola += `${'|'.yellow}   ${colors.green.bold(base)} x ${colors.blue(i)} = ${colors.red.bold(base * i)}\n`;
        }
        salida += '====================\n';

        if(listar) {
            console.log(colors.yellow('===================='));
            console.log(`${'|'.yellow}    ${colors.cyan('Tabla del')} ${colors.green.bold(base)}   ${'|'.yellow}`);
            console.log(colors.yellow('===================='));
            console.log(consola);
        }
    
        fs.writeFileSync(`./salida/tablas-${base}.txt`, salida);
    
        return `tablas-${base}.txt`;

    } catch (error) {
        throw (error);
    }
}


/*
const crearArchivo = (base = 5) => new Promise( (resolve, reject) => {

    let salida = '';
    
    salida += `====================\n`;
    salida += `|   Tabla del ${base}    |\n`;
    salida += "====================\n";
    for(let i = 1; i <= 10; i++) {
        salida += `|  ${base} x ${i} = ${base * i}\n`;
    }
    salida += "====================\n";

    fs.writeFileSync(`tablas-${base}.txt`, salida);
    
    return resolve(`tablas-${base}.txt`);

});
*/

module.exports = {
    crearArchivo
}
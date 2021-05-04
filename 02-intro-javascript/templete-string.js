
const nombre = "Capitan America";
const real = "Rogers E";

/*console.log(nombre + ' ' + real);
console.log(`${ nombre } ${ real }`);

const nombreCompleto = nombre + ' ' + real;
const nombreTemplate = `${ nombre } ${ real }`;

console.log(nombreCompleto === nombreTemplate);*/

function getNombre() {
    return `${nombre} ${real}`;
}

console.log(`El nombre es: ${ getNombre() }` );


//function sumar (a, b) {
//    return a + b;
//}

//const sumar = (a, b) => a + b;

//const saludar = () => 'Hola Mundo';

//const saludar = nombre => `Hola: ${nombre}`;
//console.log(sumar(20, 10));

//console.log( saludar("Orlando") );

const flash = {
    nombre: 'Barry',
    apellido: 'Allen',
    poder: 'Supervelocidad',
    getNombre() {
        return `${ this.nombre } ${ this.apellido} - poder: ${ this.poder}`
    }
};

console.log( flash.getNombre() );
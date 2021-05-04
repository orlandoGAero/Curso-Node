const flash = {
    nombre: 'Barry',
    apellido: 'Allen',
    poder: 'Supervelocidad',
    getNombre: function() {
        return `${ this.nombre } ${ this.apellido} - poder: ${ this.poder}`
    }
};

//console.log(flash.getNombre());

 
//let nombre = flash.nombre;
//let apellido = flash.apellido;
//let poder = flash.poder;

//Con destructuracion se puede hacer lo anterior en una linea
const { nombre : primerNombre, apellido, poder } = flash;

console.log(primerNombre, apellido, poder);
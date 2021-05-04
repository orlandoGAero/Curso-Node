
const empleados = [
    {
        id: 1,
        nombre: "Orlando"
    }, {
        id: 2,
        nombre: "Sam"
    }, {
        id: 3,
        nombre: "Metzli"
    }
];

const salarios = [
    {
        id: 1,
        salario: 2000
    }, {
        id: 2,
        salario: 3000
    }
];

const getEmpleado = (id, callback) => {

    const empleadoDB = empleados.find(empleado => empleado.id === id)?.nombre;

    if (empleadoDB) {
        callback(null, empleadoDB);
    } else {
        callback(`Empleado con el id: ${ id } no existe`);
    }
};

const getSalario = (id, callback) => {
    const salarioDB = salarios.find(salario => salario.id === id)?.salario;
    
    if(salarioDB) {
        callback(null, salarioDB);
    } else {
        callback(`Salario del empleado con el id ${id} no encontrado`);
    }
};

const id = 3;

getEmpleado(id, (err,empleado) => {

    if(err) {
        console.log('Error!');
        return console.log(err);
    }

    getSalario(id, (err, salario) => {

        if(err) {
            console.log('Error');
            return console.log(err);
        }
    
        console.log('El empleado',empleado,'tiene un salario de',salario);
    })
});












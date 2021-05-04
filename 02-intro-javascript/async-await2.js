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

const getEmpleado = (id) => new Promise( (resolve, reject) => {
    const empleadoDB = empleados.find(empleado => empleado.id === id)?.nombre;
    (empleadoDB)
        ? resolve(empleadoDB)
        : reject(`Empleado con el id ${id}, no existe`);
});


const getSalario = id => new Promise( (resolve,reject) => {
    const salarioDB = salarios.find(salario => salario.id === id)?.salario;
    (salarioDB)
        ? resolve(salarioDB)
        : reject(`No hay salario para el empleado con id ${id}`)
});

const id = 36565;

// getEmpleado(id)
//     .then(empleado => {
//         nombre = empleado;
//         return getSalario(id);
//     })
//     .then(salario => console.log(`El empleado ${nombre} tiene un salario de ${salario}`) )
//     .catch(err => console.log(err))

const obtenerInformacion = async id => {

    try {
        const empleado = await getEmpleado(id);
    
        const salario = await getSalario(id);
    
        return `El empleado ${empleado} tiene un salario de ${salario}`;
    } catch (error) {
        throw error;
    }
}


obtenerInformacion(id)
    .then(msg => console.log('Todo bien',msg))
    .catch(err => console.log('Todo Mal',err))




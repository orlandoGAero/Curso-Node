const inquirer = require('inquirer');
require('colors');

const opciones = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Qué desea hacer?',
        choices: [
            {
                value: 1,
                name: `${'1.'.green} Buscar Ciudad`
            },
            {
                value: 2,
                name: `${'2.'.green} Historial`
            },
            {
                value: 0,
                name: `${'0.'.green} Salir`
            },
        ]
    }
];

const inquirerMenu = async () => {

    console.clear();
    console.log('==========================='.green);
    console.log('   Seleccione una opción'.white);
    console.log('===========================\n'.green);

    const { opcion } = await inquirer.prompt(opciones);

    return opcion;
}

const pausa = async () => {
    const pregunta = [
        {
            type: 'input',
            name: 'continuar',
            message: `Presione ${'ENTER'.green} para continuar`
        }
    ];
    
    await inquirer.prompt(pregunta);
}

const leerInput = async message => {

    const question = [
        {
            type: 'input',
            name: 'lugar',
            message,
            validate( value ) {
                if(value.length === 0) {
                    return "Por favor ingrese una ciudad";
                }
                
                return true;
            }
        }
    ];

    const { lugar } = await inquirer.prompt(question);

    return lugar;
}

const listarLugares = async (lugares = []) => {

    const choices = lugares.map( (lugar, i) => {

        const idx = `${i + 1}.`.green;

        const {id, name} = lugar;

        return {
            value: id,
            name: `${idx} ${name}`
        }
    
    });

    choices.unshift({
        value: '0',
        name: `${'0.'.green} Cancelar`
    });

    const opciones = [
        {
            type: 'list',
            name: 'id',
            message: 'Selecciona un lugar:',
            choices
        }
    ];

    const { id } = await inquirer.prompt(opciones);

    return id;

}

const confirmar = async message => {

    const question = [
        {
            type: 'confirm',
            name: 'ok',
            message
        }
    ];

    const {ok} = await inquirer.prompt(question);

    return ok
}

const listadoTareasChecklist = async (tareas = []) => {

    const choices = tareas.map( (tarea, i) => {

        const idx = `${i + 1}.`.green;

        const {id, desc, completadoEn} = tarea;

        return {
            value: id,
            name: `${idx} ${desc}`,
            checked: (completadoEn) ? true : false
        }
    
    });

    const opcionesTareas = [
        {
            type: 'checkbox',
            name: 'ids',
            message: 'Seleccione',
            choices
        }
    ];

    const { ids } = await inquirer.prompt(opcionesTareas);

    return ids;

}

module.exports = {
    inquirerMenu,
    pausa,
    leerInput,
    listarLugares,
    confirmar,
    listadoTareasChecklist
}

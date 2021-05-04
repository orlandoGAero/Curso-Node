
require('colors');
const { guardarDB, leerDB } = require('./helpers/crearArchivo');
const { 
        inquirerMenu, 
        pausa,
        leerInput,
        listadoBorrarTareas,
        confirmar,
        listadoTareasChecklist
} = require('./helpers/inquirer');
const Tareas = require('./models/Tareas');

const main = async () => {

    let opt = '';
    const tareas = new Tareas();

    const tareasDB = leerDB();
    
    if(tareasDB) {
        // Cargar las tareas de la db
        tareas.cargarTareasFromArray(tareasDB);
    }

    do {
        opt = await inquirerMenu();

        switch (opt) {
            case '1':
                // Crear Tarea
                const desc = await leerInput("Descripción:")
                tareas.crearTarea(desc);
                break;
        
            case '2':
                // Listar Tareas
                tareas.listadoCompleto();
                break;

            case '3':
                // Listar Tareas Completadas
                tareas.listadoPendientesCompletadas();
                break;

            case '4':
                // Listar Tareas Pendientes
                tareas.listadoPendientesCompletadas(false);
                break;

            case '5':
                // Marcar Tareas Completadas o Pendientes
                const ids = await listadoTareasChecklist(tareas.listadoArr);
                tareas.toogleCompletadas(ids);
                break;
            
            case '6':
                // Borrar Tareas
                const id = await listadoBorrarTareas(tareas.listadoArr);

                if(id !== '0') {
                    // confirmar si se desea borrar
                    const ok = await confirmar("¿Estás seguro?")
                    
                    if(ok) {
                        tareas.borrarTarea(id);
                        console.log('Tarea Borrada'.green);
                    }
                }
                break;
        }

        guardarDB(tareas.listadoArr);

        await pausa();

    } while (opt !== '0');

}

main();
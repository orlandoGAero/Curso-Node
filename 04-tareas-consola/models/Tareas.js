const Tarea = require("./Tarea");
require("colors");

class Tareas  {

    _listado = {};

    get listadoArr() {
        const listado = [];

        Object.keys(this._listado).forEach( key => {

            const tarea = this._listado[key];
            listado.push(tarea);

        });

        return listado;
    }

    constructor() {
        this._listado = {}
    }

    borrarTarea( id = '') {
        if(this._listado[id]) {
            delete this._listado[id];
        }
    }

    cargarTareasFromArray(tareas = []) {
        tareas.forEach( tarea => {
            this._listado[tarea.id] = tarea;
        })
    }

    crearTarea( desc = '') {
        const tarea = new Tarea( desc );
        this._listado[tarea.id] = tarea;
    }

    listadoCompleto() {
        console.log('\n');

        this.listadoArr.forEach( this.imprimirLista );

        console.log('\n');

    }

    listadoPendientesCompletadas(completadas = true) {
        console.log('\n');

        this.listadoArr
        .filter( tarea => completadas ? tarea.completadoEn : !tarea.completadoEn )
        .forEach( this.imprimirLista )

        console.log('\n');

    }

    imprimirLista(tarea,index) {
        const indice = `${index + 1}.`.green;
        const {desc, completadoEn} = tarea;
        const estado = (completadoEn) ? completadoEn.green : 'Pendiente'.red;

        console.log(`${indice} ${desc} :: ${estado}`)
    }

    toogleCompletadas( ids = []) {

        ids.forEach( id => {

            const tarea = this._listado[id];

            if(!tarea.completadoEn) {
                tarea.completadoEn = new Date().toISOString();
            }

        });

        this.listadoArr.forEach( tarea => {
            if(!ids.includes(tarea.id)) {
                this._listado[tarea.id].completadoEn = null;
            }
        });

    }
}

module.exports = Tareas;
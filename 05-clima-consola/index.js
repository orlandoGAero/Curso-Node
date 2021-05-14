require('dotenv').config();
const { inquirerMenu, pausa, leerInput, listarLugares } = require("./helpers/inquirer");
const Busquedas = require("./models/busquedas");

const main = async () => {
    let opt;
    const busquedas = new Busquedas();
    
    do {
        opt = await inquirerMenu();
        
        switch(opt) {
            case 1:
                // Mostrar mensaje
                const lugar = await leerInput("Ciudad: ");
                
                // Buscar lugares
                const lugares = await busquedas.buscarCiudad(lugar);
                
                // Seleccionar lugar
                const id = await listarLugares(lugares);

                if(id === '0') continue;

                const lugarSeleccionado = lugares.find( l => l.id === id);
                const {name, lng, lat} = lugarSeleccionado;

                busquedas.guardarHistorial(name);

                // Clima
                const clima = await busquedas.consultarClima(lat,lng);
                const {temp, max, min, desc} = clima;

                // Mostrar resultados
                console.clear();
                console.log("\nInformación de la ciudad\n".green);
                console.log("Ciudad: ", name.green);
                console.log("Lng: ", lng);
                console.log("Lat: ", lat);
                console.log("Temperatura: ", temp);
                console.log("Máxima: ", max);
                console.log("Mínima: ", min);
                console.log("¿Como esta el clima?:", desc.green);
                break;
            case 2:
                busquedas.historialCapitalizado.forEach( (lugar,i) => {

                    const idx = `${i + 1}.`;
                    console.log(`${idx} ${lugar}`);
                });
                break;
        }

        if(opt !== 0 ) await pausa();

    } while (opt !== 0 );

}

main();
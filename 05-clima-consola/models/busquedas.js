const fs = require('fs');

const axios = require('axios');

class Busquedas {

    historial = [];
    dbPath = './db/database.json';

    constructor() {
        this.leerDB();
    }

    get paramsMapbox() {
        return {
            'access_token': process.env.MAPBOX_KEY,
            'limit': 5,
            'language': 'es'
        }
    }

    get paramsWheatherMap() {
        return {
            'appid': process.env.WHEATHERMAP_KEY,
            'units': 'metric',
            'lang': 'es'
        }
    }

    get historialCapitalizado() {
        return this.historial.map(lugar => 
            lugar.split(" ").map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1)).join(" ")
        )
    }

    async buscarCiudad(lugar = '') {

        try {
            
            // Peticion http
            const instancia = axios.create({
                baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${lugar}.json?`,
                params: this.paramsMapbox
            });

            const respuesta = await instancia.get();
    
            const lugares = respuesta.data.features;

            return lugares.map( lugar => ({
                id: lugar.id,
                name: lugar.place_name,
                lng: lugar.center[0],
                lat: lugar.center[1]
            }))
        } catch (error) {
            return [];
        }
    }

    async consultarClima(lat,lon) {
        try {

            // instancia axios
            const instancia = axios.create({
                baseURL: `https://api.openweathermap.org/data/2.5/weather?`,
                params: {lat, lon, ...this.paramsWheatherMap},
            });

            const resp = await instancia.get();

            const { main: {temp, temp_min, temp_max}, weather: [{ description : desc}] } = resp.data;

            return {
                temp,
                min: temp_min,
                max: temp_max,
                desc
            }
        } catch (error) {
            console.log(error);
        }
    }

    guardarHistorial(lugar= '') {
        // prevenir duplicados
        if(this.historial.includes(lugar.toLocaleLowerCase()))
            return;
        
        // mostrar solo 5 elementos
        this.historial = this.historial.slice(0,4);

        this.historial.unshift(lugar.toLocaleLowerCase());

        // guardar en DB
        this.guardarDB();
    }

    guardarDB() {
        const payload = {
            historial: this.historial
        }

        fs.writeFileSync(this.dbPath, JSON.stringify(payload));
    }

    leerDB() {
        // Verificar si existe el archivo
        if(!fs.existsSync(this.dbPath)) return;

        // leer el archivo
        const info = fs.readFileSync(this.dbPath,{encoding: 'utf-8'});

        const {historial} = JSON.parse(info);

        this.historial = historial;

    }
}

module.exports = Busquedas
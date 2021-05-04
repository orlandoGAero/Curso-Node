/* 
    *Async Await
*/

// let getNombre = async() => {
//     throw new Error('NO se encontro...');
//     return 'Orlando'
// };

const getNombre = () => new Promise((resolve)=>{
    setTimeout(()=>{
        resolve('Orlando');
    }, 3000)
})


const saludar = async () => {
    const nombre = await getNombre();
    return `Hola ${nombre}`;
}

saludar()
    .then( msg => console.log(msg))

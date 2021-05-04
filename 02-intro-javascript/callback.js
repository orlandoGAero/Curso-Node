
const getUserById = (id, callback) => {
    const user = {
        id,
        nombre: 'Orlando'
    }

    setTimeout(() => {
        callback(user);
    }, 1500);
}

getUserById(1, ({id,nombre}) => {
    console.log(`ID: ${id}`);
    console.log(`Nombre: ${nombre}`);
});
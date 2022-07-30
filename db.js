const db = require('mongoose');

// Opcion de crear la Bases cuando queremos
db.Promise = global.Promise

// Hacemos aincrona la conexion para que espere el acceso
async function connect(url) {
    //Coneccion base de datos
    await db.connect(url, {
        useNewUrlParser: true,
        //useUnifiedTopology: true
    });
    console.log('[db] Conectada con exito');
}
module.exports = connect;






//Modulos node-express
const express = require('express');
const bodyParser = require('body-parser');

// Conexion url de mongo db
const db = require('./db')

//Modulos locales
const router = require('./network/routes');
db('mongodb+srv://db_garroyo:Inetum_2022@cluster0.ws0pipe.mongodb.net/telegrom');


//Creando la app
var app = express();

//variables de la app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


//! Router siempre debe de ir al final
//? Ya no vamos a usar el app.use(router)en su vez usaremos el router app
//Rutas
//?Usaremos las rutas de network
router(app);



app.use('/app', express.static('public'));

//Empezando el servidor en el puerto port
var port = 3000
app.listen(port);
console.log('La aplicacion esta corriendo en el puerto ' + port);

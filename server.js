const express = require('express');
const bodyParser = require('body-parser');
// Aca manjo todas las respuestas y errores
const respose = require('./network/response');
const { response } = require('express');
const router = express.Router();

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);


router.get('/', function (req, res) {
    res.send('Hola desde get');
});

router.post('/', function (req, res) {
    res.send('Hola desde post');
});

router.get('/mensaje', function (req, res) {
    console.log(req.headers);
    res.header({
        "custom-header": "Nuestro valor personalizado",
    });
    respose.success(req, res, 'Lista de mensajes');
});

router.post('/mensaje', function (req, res) {
    //res.send('Mensaje anadido');
    if (req.query.error == "ok") {
        respose.error(req, res, 'Error simulado', 401);
        //respose.error(req, res, 'Error simulado');
    } else {
        respose.success(req, res, 'Creado correctamente', 201);
    }

});

router.delete('/mensaje', function (req, res) {
    console.log(req.query);
    console.log(req.body);
    //res.send('Mensaje ' + req.body.text + ' borrado');
    //res.send();
    //res.status(201).send();
    respose.success(req, res, 'Eliminado correctamente');


});

// app.use('/', function (req, res) {
//     res.send('Hola');
// });

app.use('/app', express.static('public'));

var port = 3000
app.listen(port);
console.log('La aplicacion esta corriendo en el puerto ' + port);

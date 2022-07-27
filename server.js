const express = require('express');
const bodyParser = require('body-parser');
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
    res.send('lista de mensajes');
});

router.post('/mensaje', function (req, res) {
    //res.send('Mensaje anadido');
    res.status(201).send([{ error: '', body: 'Creado Correctamanete' }]);
});

router.delete('/mensaje', function (req, res) {
    console.log(req.query);
    console.log(req.body);
    //res.send('Mensaje ' + req.body.text + ' borrado');
    //res.send();
    res.status(201).send();


});

// app.use('/', function (req, res) {
//     res.send('Hola');
// });

var port = 3000
app.listen(port);
console.log('La aplicacion esta corriendo en el puerto ' + port);

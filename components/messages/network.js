const express = require('express');
const router = express.Router();

// Modulos locales
const response = require('../../network/response');
const controller = require('./controller');

router.get('/', function (req, res) {
    console.log(req.headers);
    res.header({
        "custom-header": "Nuestro valor personalizado",
    });
    response.success(req, res, 'Lista de mensajes');
});



router.post('/', function (req, res) {
    //? Enviamos info de el req a el archivo -> controller lo que retorna una promesa
    //? Después recibimos la response de el archivo response y enviamos success o error    
    controller.addMessage(req.body.user, req.body.message)
        .then((fullMessage) => {
            //response.success(req, res, 'Creado correctamente', 201);
            response.success(req, res, fullMessage, 201);
        })
        .catch(e => {
            response.error(req, res, 'Informacion invalida', 400, 'Error en el contenido');
        });

});

router.delete('/', function (req, res) {
    console.log(req.query);
    console.log(req.body);
    response.success(req, res, 'Eliminado correctamente');
});

module.exports = router;
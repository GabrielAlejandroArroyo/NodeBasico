const express = require('express');
const router = express.Router();

// Modulos locales
const response = require('../../network/response');
const controller = require('./controller');

router.get('/', function (req, res) {
    // Si no viene uso ||
    const filterMessage = req.query.user || null;
    controller.getMessages(filterMessage)
        .then((messageList) => {
            response.success(req, res, messageList, 200);
        })
        .catch(e => {
            response.error(req, res, 'unexpected error', 500, e);
        })
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

router.patch('/:id', function (req, res) {
    controller.updateMessage(req.params.id, req.body.message)
        .then((data) => {
            response.success(req, res, data, 200);
        })
        .catch(e => {
            response.error(req, res, 'Error interno', 500, e)
        });
})

router.delete('/:id', function (req, res) {
    controller.deleteMessage(req.params.id)
        .then((data) => {
            // En ES nos permite intercalar valores con `Usuario ${id} elminado` estas comillas ``
            response.success(req, res, `Usuario ${id} elminado`, 200);
        })
        .catch(e => {
            response.error(req, res, 'Error interno', 500, e)
        });
});

module.exports = router;
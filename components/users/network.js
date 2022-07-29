const express = require('express');
const response = require('../../network/response');

const router = express.Router();

router.get('/', function (req, res) {
    console.log(req.headers);
    res.header({
        "custom-header": "Nuestro valor personalizado",
    });
    response.success(req, res, 'Lista de usuarios');
});

router.post('/', function (req, res) {
    if (req.query.error == "ok") {
        response.error(req, res, 'Error inesperado', 500, 'Es solo una simulacion de los errores');
    } else {
        response.success(req, res, 'Usuario Creado correctamente', 201);
    }

});

router.delete('/', function (req, res) {
    console.log(req.query);
    console.log(req.body);
    response.success(req, res, 'Usuario Eliminado correctamente');
});

module.exports = router;
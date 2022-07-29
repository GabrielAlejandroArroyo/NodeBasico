//? Recibe desde server la app (server) y establece la función padre de un router
//? De cada una de las rutas después llama a messages/network quienes envian el mensaje de respuesta
const express = require('express');
const message = require('../components/messages/network');

const routes = function (server) {
    server.use('/message', message);
}

module.exports = routes;
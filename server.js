const express = require('express');

var app = express();

app.use('/', function (req, res) {
    res.send('Hola');
});

var port = 3000
app.listen(port);
console.log('La aplicacion esta corriendo en el puerto ' + port);

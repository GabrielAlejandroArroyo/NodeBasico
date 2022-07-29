const express = require('express');
const bodyParser = require('body-parser');

//const router = require('./components/messages/network');
const router = require('./network/routes');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//app.use(router);
router(app);


// router.get('/', function (req, res) {
//     res.send('Hola desde get');
// });

// router.post('/', function (req, res) {
//     res.send('Hola desde post');
// });

app.use('/app', express.static('public'));

var port = 3000
app.listen(port);
console.log('La aplicacion esta corriendo en el puerto ' + port);

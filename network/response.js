//? Este archivo es usado dentro de el enrutador para enviar respuestas
//* Server <- routes <- network <- responses
exports.success = function (req, res, message, status) {
    //res.send(message);
    res.status(status || 200).send({
        error: '',
        body: message
    });
}

exports.error = function (req, res, message, status, details) {
    console.log('[response error] ' + details);
    res.status(status || 500).send({
        error: message,
        body: ''
    });
}
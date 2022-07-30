//?Este archivo recibe informacion desde la network

// Importa las funciones de almaceniento en store
const store = require('./store');

function addMessage(user, message) {
    return new Promise((resolve, reject) => {
        if (!user || !message) {
            console.error('[messageController] No hay usuario o  mensaje');
            reject('Datos incorrectos');
            return false;
        }
        const fullMessage = {
            user: user,
            message: message,
            date: new Date(),
        };
        //Almaceno la info en el store
        store.add(fullMessage);
        // Importante que reorne el fullmessage
        resolve(fullMessage);
    });
}

function getMessages(filterUser) {
    return new Promise((resolve, reject) => {

        resolve(store.list(filterUser));

    })
}

function updateMessage(id, message) {
    return new Promise(async (resolve, reject) => {
        console.log(id);
        console.log(message);
        if (!id || !message) {
            reject / ('Invalid Data');
            return false;
        }
        const result = await store.updateText(id, message);
        resolve(result);
    })

}

module.exports = {
    addMessage,
    getMessages,
    updateMessage,
}
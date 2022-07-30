const db = require('mongoose');
const Model = require('./model')

//Coneccion base de datos

db.Promise = global.Promise
db.connect('mongodb+srv://db_garroyo:Inetum_2022@cluster0.ws0pipe.mongodb.net/telegrom', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
console.log('[db] Conectada con exito');

function addMessage(message) {
    //list.push(message);
    const myMessage = new Model(message);
    myMessage.save();

}

async function getMessages() {
    //return list;
    const message = await Model.find()
    return message;
}

async function updateText(id, message) {
    //Priomero buscamos el objeto con findOne
    const foundMessage = await Model.findOne({
        _id: id
    });
    foundMessage.message = message;
    const newMessage = await foundMessage.save();
    return newMessage;
}

module.exports = {
    add: addMessage,
    list: getMessages,
    // get
    updateText: updateText,
    //delete
}

//mongodb+srv://<username>:<password>@cluster0.ws0pipe.mongodb.net/test
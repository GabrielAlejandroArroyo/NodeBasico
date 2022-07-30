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

module.exports = {
    add: addMessage,
    list: getMessages
    // get
    //update
    //delete
}

//mongodb+srv://<username>:<password>@cluster0.ws0pipe.mongodb.net/test
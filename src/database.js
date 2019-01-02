const mongoose = require('mongoose');
const password = 'jA6SXdtLqOKgqwVf'
const URI = `mongodb://DarioApp:${password}@cluster0-shard-00-00-plzoq.mongodb.net:27017,cluster0-shard-00-01-plzoq.mongodb.net:27017,cluster0-shard-00-02-plzoq.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true`

mongoose.connect(URI)
    .then(db => console.log('Base de Datos Conectada'))
    .catch(err => console.log(err));

module.exports = mongoose;
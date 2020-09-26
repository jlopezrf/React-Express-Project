const mongoose = require('mongoose');

const url = 'mongodb+srv://jlopezrf:Solomusica_18@cluster0.0v0co.mongodb.net/firstDb?retryWrites=true&w=majority';

mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', () => console.error('Error conecting to the database'));
db.once('open', () => console.log('Connection to db succesfull'));

module.exports = db
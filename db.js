const mongoose = require('mongoose');

var mongoURL = 'mongodb://127.0.0.1:27017/JustBook';

mongoose.connect(mongoURL , {useUnifiedTopology: true, useNewUrlparser: true});

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
    console.log('Connected to MongoDB');
});

module.exports = mongoose;
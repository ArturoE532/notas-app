const express = require('express');
const path = require('path');

// Initializations
const app = express();

// Settings
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname + 'views'));

//Middlewares
app.use(express.urlencoded({extended: false}));

// Global variables

// Routes
app.get('/', (req, res) => {
    res.send('Holaaaa');
});

// Static fles
app.use(express.static(path.join(__dirname, 'public')))


module.exports = app;
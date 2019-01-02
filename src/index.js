const express = require('express');
const morgan = require('morgan');
const path = require('path');
const {mongoose} = require('./database');
const app = express();
const fs = require('fs')

// Configuracion
app.set('port', process.env.PORT || 3000)

// Middlewares

app.use(morgan('dev'));
app.use(express.json());


// Routes
app.use('/clientes',require('./routes/cliente.routes'));
app.use('/turnos', require('./routes/turno.routes'));


// Archivos estaticos

app.use(express.static(path.join(__dirname, 'public')));
app.use(function (req, res) {
   let html = fs.readFileSync(path.join(__dirname, 'public') + '/index.html', 'utf8')
   res.setHeader('Content-Type', 'text/html; charset=UTF-8')
   res.send(html)
})

// Servidor

app.listen(app.get('port'), () => {
    console.log(`Servidor Conectado Exitosamente En  Puerto ${app.get('port')}`);
});
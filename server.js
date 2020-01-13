/** 
 * Requires
 */
const express = require('express');
const app = express();

const hbs = require('hbs');
require('./hbs/hbs-helpers');

const port = process.env.PORT || 3000;
/**
 * Middlewares
 */
app.use(express.static(__dirname + '/public'));

// Registrar direccion de los parciales para las vistas
hbs.registerPartials(__dirname + '/views/parciales');
// Express HBS engine
app.set('view engine', 'hbs');


// Accion a traves del metodo GET (index)
app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Jhonny'
    });
});

// Definir accion para la ruta /about
app.get('/about', (req, res) => {
    res.render('about');
});

// Puerto de escucha
app.listen(port, () => {
    console.log(`Escuchando peticiones por el puerto ${port}`);
});
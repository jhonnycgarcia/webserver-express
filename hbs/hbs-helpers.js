const hbs = require('hbs');

// Obtener año
hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear();
});
// Capitalizar texto
hbs.registerHelper('capitalizar', (texto) => {
    let palabras = texto.split(' ');
    palabras.forEach((palabra, index) => {
        palabras[index] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    });
    return palabras.join(' ');
});
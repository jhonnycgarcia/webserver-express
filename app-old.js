/** 
 * Requires
 */
const http = require('http');

// Inicializar WebServer
http.createServer((req, res) => {
    // Escribir respuesta del header
    res.writeHead(200, { 'Content-Type': 'application/json' });
    let salida = {
        nombre: ' Fernando',
        edad: 25,
        url: req.url
    };

    // Escribir respuesta
    res.write(JSON.stringify(salida));
    // res.write('Hola mundo!');
    res.end();
}).listen(8080);
console.log(`Escuchando a traves del puerto: 8080`);
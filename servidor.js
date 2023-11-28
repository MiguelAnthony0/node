const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end('Hola desde node.js');
});

server.listen(3000, ()=>{console.log('Servidor escuchando en el puerto 3000');});


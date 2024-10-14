const http = require('http');

function index(request, response) {
    response.writeHead(200);
    response.end('Hello, World From Basic');
};

http.createServer(function (request, response) {
    if (request.url === '/') {
        return index(request, response);
    }

    response.writeHead(200);
    response.end(http.STATUS_CODES[404]);
}).listen(1337, () => {
    console.log('Server berjalan di http://localhost:1337/')
});
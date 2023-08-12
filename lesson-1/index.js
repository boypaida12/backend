const http = require('http');

const hostname = 'localhost';
const port = 5000;

const handleRequest = (req, res) => {
    res.setHeader('Content-Type', 'text/html');

    if (req.url === '/another-world') {
        res.write('<h1>Another World</h1>');
    } else {
        res.write('<h1>Hellooooo</h1>');
    }

    res.end();
}

const server = http.createServer(handleRequest);

server.listen(port, hostname, () => {
    console.log('Server ready');
});

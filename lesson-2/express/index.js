const express = require('express');

const hostname = 'localhost';
const port = 3100;

const handleHomePage = (req, res) => {
    res.send('<h1>Welcome to your HomePage</h1>');
};

const handleSignupPage = (req, res) => {
    res.send('<h1>Welcome to your Signup Page</h1>');
};

const handleLoginPage = (req, res) => {
    res.send('<h1>Welcome to your Login Page</h1>');
};

const handleRequest = (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.status(404).send('<h1>Page not found</h1>');
};

const handleDeleteRequest = (req, res) => {
    res.send("<h1>DELETE request received</h1>");
}

const server = express();

server.get('/', handleHomePage);
server.post('/login', handleLoginPage);
server.put('/signup', handleSignupPage);
server.delete('/delete', handleDeleteRequest);
server.use(handleRequest);

server.listen(port, hostname, () => console.log('Server is ready to accept requests'));

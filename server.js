const http = require('http');
const app = require('./app');


Port = process.env.PORT || 5000;


http.createServer(app).listen(Port);
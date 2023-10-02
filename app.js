const express = require('express');
const validation = require('./middelware/validation');
const router = require('./routes/prodactsRouter');
const bodyParser = require('body-parser');

const server = express();
const PORT = 4300;

server.listen(PORT, () => {
   console.log("Server started on port: " + PORT);
});
server.use(bodyParser.json());
server.use(validation);
server.use(router);


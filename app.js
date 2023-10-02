const express = require('express');
// const prodactsList = require('./goodsList');
const validation = require('./middelware/validation');
const router = require('./controllers/routes/prodactsRouter');

const server = express();
const PORT = 4300;

server.listen(PORT, () => {
   console.log("Server started on port: " + PORT);
});
server.use(validation);
server.use(router);


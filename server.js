const express = require('express');
const helmet = require('helmet');
const carsRouter = require('./carsRouter');
const server = express();

server.use(helmet());
server.use(express.json());

server.use('/cars', carsRouter);

server.get('/', (req, res) => {
	res.status(200).json('Success');
});

module.exports = server;

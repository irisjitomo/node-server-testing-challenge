const express = require('express');

const server = express();
const db = require('./people/people-model.js')


server.use(express.json())

server.get('/', (req, res) => {
    res.status(200).json({ hello: "moto"})
})

module.exports = server;
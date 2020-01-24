const express = require('express');
const helmet = require('helmet');

const ProjectsRouter = require('../projects/projects-router.js')

const server = express();

server.use(helmet());
server.use(express.json());

server.get('/', (req, res) => {
    res.send('<h2>Welcome to my Sprint Project</h2>')
})

server.use('/api', ProjectsRouter)

module.exports = server;
const db = require('../data/db-config.js');

module.exports = {
    getProjects,
    insertProject
}

function getProjects() {
    return db('projects');
}

function insertProject(project) {
    return db('projects').insert(project);
}

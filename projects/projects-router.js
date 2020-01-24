const express = require('express');

const Projects = require('./projects-model.js');

const Resources = require('./resources-model.js');

const router = express.Router();

//---------------projects

//gets list of projects
router.get('/projects', (req, res) => {
    Projects.getProjects()
        .then(projects => {
            res.status(200).json(projects)
        })
        .catch(err => {
            console.log('error getting projects', err)
            res.status(500).json({ errorMessage: 'Could not find projects' })
        })
})


//adds project
router.post('/projects', (req, res) => {
    const newProj = req.body;

    Projects.insertProject(newProj)
        .then(project => {
            res.status(201).json(project)
        })
        .catch(err => {
            console.log('error creating project', err)
            res.status(500).json({ errorMessage: 'Could not create a project' })
        })
})


//--------------resources

//gets list of resources
router.get('/resources', (req, res) => {
    Resources.getResources()
        .then(resources => {
            res.status(200).json(resources)
        })
        .catch(err => {
            console.log('error getting resources', err)
            res.status(500).json({ errorMessage: 'Could not find resources' })
        })
})


//adds resources
// router.post('/resources', (req, res) => {
//     const newRes = req.body;

//     Resources.insertProject(newRes)
//         .then(resource => {
//             res.status(201).json(resource)
//         })
//         .catch(err => {
//             console.log('error creating resource', err)
//             res.status(500).json({ errorMessage: 'Could not create a resource' })
//         })
// })


//----------------tasks

//gets list of tasks with project name and project description

//adds tasks


module.exports = router;
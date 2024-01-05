var express = require('express');
var router = express.Router();

const Project = require('../models/Project')
const Task = require('../models/Task')

router.post('/', (req, res, next) => {

    const { title, description } = req.body

    Project.create(
        {
            title,
            description,
            tasks: []
        }
    )
    .then((createdProject) => {
        console.log("New Project ==>", createdProject)
        res.json(createdProject)
    })
    .catch((err) => {
        console.log(err)
        res.json(err)
    })

})

router.get('/', (req, res, next) => {

    Project.find()
        .populate('tasks')
        .then((foundProjects) => {
            console.log("Found Projects ==>", foundProjects)
            res.json(foundProjects)
        })
        .catch((err) => {
            console.log(err)
            res.json(err)
        })

})

module.exports = router;
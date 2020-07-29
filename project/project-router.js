const express = require("express")
const project = require("./project-model")
const {validateProjectId} = require("../middleware/validate")
const restrict = require("../middleware/auth-middleware");

const router = express.Router()


router.get('/project', restrict(), (req, res, next) => {
    project.getProject()
    .then(project => {
        res.json(project);
    })
    .catch(err => {
        next(err)
    })
})

router.get('/project/:id', (req, res, next) => {
    project.getByProjectId(req.params.id)
    .then(project => {
        if(project){
            res.json(project);
        }else{
            res.status(401).json({
                message: "No such project"
            })
        }
    })
    .catch(err => {
        next(err)
    })
})

router.post('/project', (req, res, next) => {
    project.addProject({ ...req.body, user_id: req.token.userId })
    .then(project => {
        res.status(201).json(project);
    })
    .catch(err => {
        next(err)
    })
})

router.put('/project/:id', validateProjectId(), (req, res, next) => {
    project.updateProject(req.params.id, req.body)
    .then((project) => {
        res.status(200).json(project)
    })
    .catch(err => {
        next(err)
    })
})

router.delete('/project/:id', validateProjectId(), (req, res, next) => {
    project.removeProject(req.params.id, req.body)
    .then((project) => {
        res.status(200).json(project)
    })
    .catch(err => {
        next(err)
    }) 
})

module.exports = router 
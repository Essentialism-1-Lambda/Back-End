const express = require("express")
const Users = require("./users-model")
const project = require("./project-model")
const restrict = require("../middleware/restrict")
const {validateUserId, validateUser, validateProjectId} = require("../middleware/validate")


const router = express.Router()

router.get("/", restrict(), async (req, res, next) => {
	try {
		res.json(await Users.find())
	} catch (err) {
		next(err)
	}
})

router.get('/:id', validateUserId(), (req, res) => {
    res.status(200).json(req.user)
  });

router.post('/', validateUser(), (req, res, next) => {
    users.add(req.body)
      .then((user) =>{
        res.status(201).json(user)
      })
      .catch((error) => {
        next(error)
      })
  });

  router.delete('/:id', validateUserId(), (req, res, next) => {
    users.remove(req.params.id)
      .then((count) => {
        res.status(200).json(count)
      })
      .catch((error) => {
        next(error)
      })
  });
  
  router.put('/:id', validateUserId(), (req, res, next) => {
   users.update(req.params.id, req.body)
    .then((user) => {
      res.status(200).json(user)
    })
    .catch((error) => {
      next(error)
    })
  });


// BEGINNING OF PROJECTS WITHIN USERS

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
const express = require("express")
const Users = require("./users-model")
const project = require("./project-model")
const restrict = require("../middleware/restrict")
const {validateUserId, validateUser, validateProjectId, validateValuesId} = require("../middleware/validate")
const values = require("./values-model")

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

  router.get('/:id/project', restrict(), (req, res, next) => {
    project.getProject()
    .then(project => {
        res.json(project);
    })
    .catch(err => {
        next(err)
    })
})

router.get('/:id/project/:projectId', (req, res, next) => {
    project.getByProjectId(req.params.projectId)
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

router.post('/:id/project', (req, res, next) => {
    project.addProject({ ...req.body })
    .then(project => {
        res.status(201).json(project);
    })
    .catch(err => {
      console.log("Here!!", err)
        next(err)
    })
})

router.put('/:id/project/:projectId', validateProjectId(), (req, res, next) => {
    project.updateProject(req.body)
    .then((project) => {
        res.status(200).json(project)
    })
    .catch(err => {
        next(err)
    })
})

router.delete('/:id/project/:projectId', validateProjectId(), (req, res, next) => {
    project.removeProject(req.params.projectId, req.body)
    .then((project) => {
        res.status(200).json(project)
    })
    .catch(err => {
        next(err)
    }) 
})


// Beginning of Values End points

// router.get('/values', (req, res, next) => {
//   values.getValues()
//   .then(values => {
//       res.json(values);
//   })
//   .catch(err => {
//       next(err)
//   })
// })

router.get('/:id/values/:valuesId', (req, res, next) => {
  values.getByValuesId(req.params.valuesId)
  .then(values => {
      if(values){
          res.json(values);
      }else{
          res.status(401).json({
              message: "No such values"
          })
      }
  })
  .catch(err => {
      next(err)
  })
})

// router.post('/:id/values', (req, res, next) => {
//     values.addValues({ ...req.body, user_id: req.token.userId })
//     .then(values => {
//         res.status(201).json(values);
//     })
//     .catch(err => {
//         next(err)
//     })
// })

router.put('/:id/values/:valuesId', validateValuesId(), (req, res, next) => {
  values.updateValues(req.body)
  .then((values) => {
      res.status(200).json(values)
  })
  .catch(err => {
      next(err)
  })
})

router.delete('/:id/values/:valuesId', validateValuesId(), (req, res, next) => {
  values.removeValues(req.params.valuesId, req.body)
  .then((values) => {
      res.status(200).json(values)
  })
  .catch(err => {
      next(err)
  }) 
})

module.exports = router
const users = require("../users/users-model")
const project = require("../users/project-model")

function validateUserId() {
    return(req, res, next) => {
      users.findById(req.params.id)
      .then((user) => {
        if(user){
          req.user= user
          next()
        } else {
          res.status(400).json({
              message: "invalid user id"
          })
        }
      })
      .catch((error) => {
        next(error)
      })
    }  
  }
  
  function validateUser() {
    return (req, res, next)=> {
      if(!req.body.email){
        return res.status(400).json({
          message: "missing required name field"
        })
      }
      users.add(!req.body)
        .then((user) => {
          res.status(201).json(user)
        })
        .catch((error) => {
          console.log(error)
          res.status(400).json({
            message: "missing user data"
          })
        })
      next();
  
    }
  }

  function validateProjectId() {
    return(req, res, next) => {
      project.getByProjectId(req.params.id)
      .then((project) => {
        if(project){
          req.project = project
          next()
        } else {
          res.status(400).json({
              message: "invalid project id"
          })
        }
      })
      .catch((error) => {
        next(error)
      })
    }  
  }


  function validateValuesId() {
    return(req, res, next) => {
      values.getByValuesId(req.params.id)
      .then((values) => {
        if(values){
          req.values = values
          next()
        } else {
          res.status(400).json({
              message: "invalid values id"
          })
        }
      })
      .catch((error) => {
        next(error)
      })
    }  
  }

  module.exports = {
      validateUser,
      validateUserId,
      validateProjectId,
      validateValuesId

  }
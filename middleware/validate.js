const users = require("../users/users-model")

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
      if(!req.body.username){
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

  module.exports = {
      validateUser,
      validateUserId

  }
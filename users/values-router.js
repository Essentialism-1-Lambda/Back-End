const express = require("express")
const values = require("./values-model")

const router = express.Router()


// Beginning of Values End point


router.get('/', (req, res, next) => {
    values.getValues()
    .then(values => {
        res.json(values);
    })
    .catch(err => {
        next(err)
    })
  })
  



module.exports = router
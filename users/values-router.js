const express = require("express")
const {validateValuesId} = require("../middleware/validate")
const values = require("./values-model")

const router = express.Router()


// Beginning of Values End points


router.get('/', (req, res, next) => {
    values.getValues()
    .then(values => {
        res.json(values);
    })
    .catch(err => {
        next(err)
    })
  })
  
//   router.get('/:id/values/:valuesId', (req, res, next) => {
//     values.getByValuesId(req.params.valuesId)
//     .then(values => {
//         if(values){
//             res.json(values);
//         }else{
//             res.status(401).json({
//                 message: "No such values"
//             })
//         }
//     })
//     .catch(err => {
//         next(err)
//     })
//   })
  
  // router.post('/:id/values', (req, res, next) => {
  //     values.addValues({ ...req.body, user_id: req.token.userId })
  //     .then(values => {
  //         res.status(201).json(values);
  //     })
  //     .catch(err => {
  //         next(err)
  //     })
  // })
  
//   router.put('/:id/values/:valuesId', validateValuesId(), (req, res, next) => {
//     values.updateValues(req.body)
//     .then((values) => {
//         res.status(200).json(values)
//     })
//     .catch(err => {
//         next(err)
//     })
//   })
  
//   router.delete('/:id/values/:valuesId', validateValuesId(), (req, res, next) => {
//     values.removeValues(req.params.valuesId, req.body)
//     .then((values) => {
//         res.status(200).json(values)
//     })
//     .catch(err => {
//         next(err)
//     }) 
//   })


module.exports = router
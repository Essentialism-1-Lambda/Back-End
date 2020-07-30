const db = require("../database/dbConfig");

function getValues(){
    return db('values')

}

function getByValuesId(id){
    return db('values')
    .where({id})
    .first()
}

// async function addValues(values) {
//     const category_id = await db('values')
//       .where({ name: values.category.toLowerCase() })
//       .select("id")
//       .first()
//     if (values.category) delete values.category
//     return db('values')
//       .insert({ ...values, category_id })
//       .then((ids) => {
//         return getByValuesId(ids[0])
//       })
//   }

function updateValues(id, changes){
    if (values.id) delete values.id
    return db('values')
    .where({id})
    .update(changes)
}

function removeValues(id){
    if (values.id) delete values.id
    return db('values')
    .where('id',id)
    .del()
}



module.exports ={
    getValues,
    getByValuesId,
    // addValues,
    updateValues,
    removeValues
}

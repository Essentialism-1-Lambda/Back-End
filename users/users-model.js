const bcrypt = require("bcryptjs")
const db = require("../database/dbConfig")

async function add(user) {
    user.password = await bcrypt.hash(user.password, 14)
    
    const [id] = await db("users").insert(user)
    return findById(id)
}

function find() {
    return db("users").select("id", "username", "email")
}

function findBy(filter){
    return db("users")
    .select("id", "username", "email", "password")
    .where(filter)
}

function findById(id){
    return db("users")
    .select("id", "username", "email")
    .where({id})
    .first()
}

function update(id, changes) {
    return db("users")
    .where({id})
    .update(changes);
}

function remove(id){
    return db("users")
    .where('id', id)
    .del()
}

module.exports = {
    add,
    find,
    findBy,
    findById,
    update,
    remove

}
const db = require("../database/dbConfig");

function getProject(){
    return db('project')

}

function getByProjectId(id){
    return db('project')
    .where({id})
    .first()
}

async function addProject(project) {
  const newProject = await db('project')
    .where({ name: project.name, details: project.details, time: project.time })
    .select("id")
    .first()
  if (project.category) delete project.category
  return db('project')
    .insert({ ...project, name: project.name, details: project.details, time: project.time })
    .then((ids) => {
      return getByProjectId(ids[0])
    })
}

function updateProject(id, changes){
    if (project.id) delete project.id
    return db('project')
    .where({id})
    .update(changes)
}

function removeProject(id){
    if (project.id) delete project.id
    return db('project')
    .where('id',id)
    .del()
}



module.exports ={
    getProject,
    getByProjectId,
    addProject,
    updateProject,
    removeProject
}

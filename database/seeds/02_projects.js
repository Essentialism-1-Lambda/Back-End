exports.seed = async function(knex) {
  await knex("project").insert([
    {
      name: "",
      details: "",
      time: ""
    },
 
  ])
 };

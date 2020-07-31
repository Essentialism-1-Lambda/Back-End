exports.seed = async function(knex) {
  await knex("project").insert([
    {
      name: "Test project",
      details: "this is the data for the test project",
      time: "317 years"
    },
 
  ])
 };

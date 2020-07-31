exports.seed = async function(knex) {
  await knex("users").insert([
     {
        
        username: "test1",
        email: "test1@test.com",
        password: "abc123"
     },
  ])
 };

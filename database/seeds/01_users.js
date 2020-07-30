exports.seed = async function(knex) {
  await knex("users").insert([
     {
        
        username: "test",
        email: "test@test.com",
        password: "abc123"
     },
  ])
 };

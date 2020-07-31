exports.seed = async function(knex) {
  await knex("users").insert([
     {
        username: "test",
        email: "test@test.com",
        password: "abc123"
     },
     {
      username: "test1",
      email: "test1@test.com",
      password: "abc123"
   },
   {
      username: "test2",
      email: "test2@test.com",
      password: "abc123"
   },
  ])
 };

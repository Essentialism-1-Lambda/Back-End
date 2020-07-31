exports.seed = async function(knex) {
    await knex("values").truncate()
    await knex("project").truncate()
    await knex("users").truncate()
  };
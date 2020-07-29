exports.up = function(knex) {
    return knex.schema.createTable('project', project => {
      project.increments();
  
      project
        .string('name', 255)
        .notNullable()
        
      project
        .string('details', 255)
        .notNullable()
        
      project
      .string('time', 255)
      .notNullable();
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('project');
  };

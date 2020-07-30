exports.up = function(knex) {
    return knex.schema.createTable('values', values => {
      values.increments();
  
      values
        .string('name', 255)
        .notNullable()
        
      // values
      //   .string('details', 255)
      //   .notNullable()
        
    });
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('values');
  };
exports.up = function(knex, Promise) {
    return knex.schema.createTable('cars', (table) =>{
    table.increments();
    table.text('make');
    table.text('model');
    table.integer('year');  
    })
  };
  
  // express knex 4 lyfe
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('cars');
  };
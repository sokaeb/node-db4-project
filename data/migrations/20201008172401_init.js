
exports.up = function(knex) {
  return knex.schema
  .createTable('recipes', tbl => {
      tbl.increments();
      tbl.string('recipe_name').notNullable().unique();
      tbl.text('instructions').notNullable();
  })
  .createTable('ingredients', tbl => {
    tbl.increments();
    tbl.string('ingredient_name').notNullable().unique();
})
.createTable('recipe_ingreds', tbl => {
    tbl.increments();
    
    tbl.integer('recipe_id')
    .unsigned()
    .references('id')
    .inTable('recipes')
    .onDelete('RESTRICT')
    .onUpdate('CASCADE')

    tbl.integer('ingredient_id')
    .unsigned()
    .references('id')
    .inTable('ingredients')
    .onDelete('RESTRICT')
    .onUpdate('CASCADE')

    tbl.string('quantity').notNullable();
})
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('recipe_ingreds')
  .dropTableIfExists('ingredients')
  .dropTableIfExists('recipes')
};

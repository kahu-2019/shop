
exports.up = function(knex, Promise) {
  return knex.schema.createTable('clothes', (table) => {
    table.increments('id').primary()
    table.string('title')
    table.string('description')
    table.decimal('price')
    table.string('image')
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('clothes')
};

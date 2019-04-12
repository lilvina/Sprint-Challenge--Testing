
exports.up = function(knex, Promise) {
  return knex.schema.createTable('games_table', tbl => {
    tbl.increments()
    tbl.string('title', 128).notNullable()
    tbl.string('genre', 128).notNullable()
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('games_table')
};

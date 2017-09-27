
exports.up = function(knex, Promise) {
  return knex.schema.createTable('profiles', function (table) {
    table.increments('id').primary()
    table.integer('user_id').references('users.id')
    table.string('image')
    table.string('bio')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('profiles')
};

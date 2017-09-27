
exports.up = function(knex, Promise) {
  return knex.schema.createTable('comments', function (table) {
    table.increments('id').primary()
    table.integer('profile_id').references('profile.id')
    table.string('comment')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('comments')

};

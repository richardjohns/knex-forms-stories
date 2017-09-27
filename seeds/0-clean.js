exports.seed = function (knex, Promise) {
  const empty = table => () => knex(table).del()
  return empty('comments')()
  .then (empty('profiles'))
  .then (empty('users'))
}

// empty in reverse order to how we would load the seed data.
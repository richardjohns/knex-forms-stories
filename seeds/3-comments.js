exports.seed = function (knex, Promise) {
  return Promise.all([
    knex('comments').insert({ id: 1, profile_id: 1, comment: 'comment!' }),
    knex('comments').insert({ id: 2, profile_id: 2, comment: 'comment!' }),
    knex('comments').insert({ id: 3, profile_id: 3, comment: 'comment!' }),
    knex('comments').insert({ id: 4, profile_id: 4, comment: 'comment!' }),
    knex('comments').insert({ id: 5, profile_id: 5, comment: 'comment!' }),
    knex('comments').insert({ id: 6, profile_id: 6, comment: 'comment!' }),
    knex('comments').insert({ id: 7, profile_id: 7, comment: 'comment!' }),
    knex('comments').insert({ id: 8, profile_id: 8, comment: 'comment!' }),
    knex('comments').insert({ id: 9, profile_id: 9, comment: 'comment!' }),
    knex('comments').insert({ id: 10, profile_id: 10, comment: 'comment!' }),
    knex('comments').insert({ id: 11, profile_id: 11, comment: 'comment!' }),
    knex('comments').insert({ id: 12, profile_id: 12, comment: 'comment!' }),
    knex('comments').insert({ id: 13, profile_id: 13, comment: 'comment!' }),
    knex('comments').insert({ id: 14, profile_id: 14, comment: 'comment!' }),
    knex('comments').insert({ id: 15, profile_id: 15, comment: 'comment!' }),
    knex('comments').insert({ id: 16, profile_id: 16, comment: 'comment!' }),
    knex('comments').insert({ id: 17, profile_id: 17, comment: 'comment!' }),
    knex('comments').insert({ id: 18, profile_id: 18, comment: 'comment!' }),
    knex('comments').insert({ id: 19, profile_id: 19, comment: 'comment!' }),
    knex('comments').insert({ id: 20, profile_id: 20, comment: 'comment!' }),
    knex('comments').insert({ id: 21, profile_id: 21, comment: 'comment!' }),
    knex('comments').insert({ id: 22, profile_id: 22, comment: 'comment!' }),
    knex('comments').insert({ id: 23, profile_id: 23, comment: 'comment!' }),
    knex('comments').insert({ id: 24, profile_id: 24, comment: 'comment!' }),
    knex('comments').insert({ id: 25, profile_id: 25, comment: 'comment!' }),
    knex('comments').insert({ id: 26, profile_id: 26, comment: 'comment!' })
  ])
}

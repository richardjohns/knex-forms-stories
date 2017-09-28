var express = require('express')
var router = express.Router()

var db = require('../db')

router.get('/users/new', (req, res) => {
  db.getUser(req.app.get('connection'))
})

router.get('/', function (req, res) {
  db.getUsers(req.app.get('connection'))
    .then(function (users) {
      res.render('users', {
        users: users,
        layouts: 'index'
      })
    })
    .catch(function (err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/new', function (req, res) {
  res.render('new', {
    layouts: 'index'
  })
})

module.exports = router

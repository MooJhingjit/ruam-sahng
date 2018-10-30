const express = require('express')
const router = express.Router()
const AuthController = require('../Controllers/auth')
// router.post('/auth/signup', function(req, res) {
//   AuthController.signup(req, res)
// })

router.post('/login', function(req, res){
  AuthController.login(req, res)
})

module.exports = router
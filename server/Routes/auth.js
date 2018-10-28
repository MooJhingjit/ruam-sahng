const express = require('express');
const router = express.Router();
const AuthController = require('../Controllers/auth');
router.post('/auth/signup', function(req, res) {
  AuthController.signup(req, res)
});

router.post('/auth/signin', function(req, res){
  AuthController.signin(req, res)
});

module.exports = router;
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('../Models/user');
const jwt = require('jsonwebtoken');
router.post('/signup', function(req, res) {
   console.log('1')
   bcrypt.hash(req.body.password, 10, function(err, hash){
      if(err) {
         console.log('2')
         return res.status(500).json({
            error: err
         });
      }
      else {
         const user = new User({
            _id: new  mongoose.Types.ObjectId(),
            email: req.body.email,
            password: hash    
         });
         user.save().then(function(result) {
            console.log(result);
            res.status(200).json({
               success: 'New user has been created'
            });
         }).catch(error => {
            res.status(500).json({
               error: err
            });
         });
      }
   });
});

router.post('/signin', function(req, res){
  User.findOne({email: req.body.email})
  .exec()
  .then(function(user) {
     bcrypt.compare(req.body.password, user.password, function(err, result){
        if(err) {
           return res.status(401).json({
              failed: 'Unauthorized Access'
           });
        }
        if(result) {
          const JWTToken = jwt.sign({
               email: user.email,
               _id: user._id
             },
             'RuamSahng',
              {
                expiresIn: '2h'
              });
              return res.status(200).json({
                success: 'Welcome to the JWT Auth',
                token: JWTToken
              });
         }
        return res.status(401).json({
           failed: 'Unauthorized Access'
        });
     });
  })
  .catch(error => {
     res.status(500).json({
        error: error
     });
  });;
});

router.post('/verify', function(req, res){
  var token = req.body.token
  // console.log(req.body.token)
  if (!token) {
    return res.status(403).send({ auth: false, message: 'No token provided.' });
  }
    
  jwt.verify(token, 'RuamSahng', function(err, decoded) {
    if (err) {
      return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    }
    // if everything good, save to request for use in other routes
    req.userId = decoded.id;
    return res.status(500).send({ userId: decoded.id, message: 'Succes' });
    // next();
  });
});

module.exports = router;
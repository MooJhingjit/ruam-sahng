
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('../Models/user');
const jwt = require('jsonwebtoken');
const signup = (req, res) => {
  bcrypt.hash(req.body.password, 10, function(err, hash){
    if(err) {
       return res.status(500).json({
          error: err
       });
    }
    else {
      const user = new User({
        _id: new  mongoose.Types.ObjectId(),
        name: req.body.name,
        username: req.body.username,
        password: hash    
      });
      user.save().then(function(result) {
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
}

const signin = (req, res) => {
  User.findOne({username: req.body.username})
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
            username: user.username,
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
  });
}

module.exports.signup = signup
module.exports.signin = signin
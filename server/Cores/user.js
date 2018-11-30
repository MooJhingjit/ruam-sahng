const User = require('../Models/user');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const signup = async (email, hash) => {
  const user = new User({
    _id: new  mongoose.Types.ObjectId(),
    email: email,
    password: hash    
  });
  try {
    user.save()
    return true
  } catch (error) {
    return false
  }
}

const signin = async (email, password) => {
  try {
    let user = await User.findOne({email: email}).exec()
    bcrypt.compare(password, user.password, function(err, result){
      if(err) {
        return {res: false, msg: 'Unauthorized Access'}
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
        return {res: true, msg: 'Welcome to the JWT Auth', token: JWTToken}
      }
      return {res: false, msg: 'Unauthorized Access'}
    });
  } catch (error) {
    return {res: false, msg: error}
  }
  
  // .then(function(user) {
     
  // })
  // .catch(error => {
  //    res.status(500).json({
  //       error: error
  //    });
  // });

}

const get = async () => {
  return 'get user'
}

module.exports.signup = signup
module.exports.signin = signin
module.exports.get = get
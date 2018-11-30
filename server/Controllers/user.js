const bcrypt = require('bcrypt');
const UserCore = require('../Cores/user.js')

const get = (req, res, next) => {
  let result = UserCore.get()
  res.status(200).json({result, msg: 'success'})
}

const signup = (req, res, next) => {
  bcrypt.hash(req.body.password, 10, function(err, hash){
    if(err) {
       return res.status(500).json({
          error: err
       });
    }
    else {
      let result = UserCore.signup(req.body.email, hash)
      if (result) {
        res.status(200).json({
          success: 'New user has been created'
        });
      } else {
        res.status(500).json({});
      }
    }
  });
}

const signin = (req, res, next) => {
  let result = UserCore.signin(req.body.email, req.body.password)
  if (result.res) {
    return res.status(200).json({
      success: result.msg,
      token: result.token
    });
  } else {
    return res.status(401).json({
      failed: result.msg
    });
  }
}

module.exports.get = get
module.exports.signup = signup
module.exports.signin = signin

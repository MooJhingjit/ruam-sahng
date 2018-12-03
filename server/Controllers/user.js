const bcrypt = require('bcrypt');
const UserCore = require('../Cores/user.js')
const config = require('../Config/app.js')

const index = async (req, res, next) => {
  let result = {}
  result.department = config.appConfig.userDepartment
  result.qcSection = config.appConfig.qcSection
  result.user = await UserCore.get(req.userId)
  res.status(200).json({result, msg: 'success'})
}

const update = async (req, res, next) => {
  let result = await UserCore.update(req.userId, req.body.data)
  if (!result.isPass) {
    res.status(422).json({data: result, msg: 'error'})
  }
  res.status(200).json({data: result, msg: 'success'})
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

const signup = (req, res, next) => {
  bcrypt.hash(req.body.password, 10, function(err, hash){
    if(err) {
       return res.status(500).json({
          error: err
       });
    }
    else {
      let result = UserCore.signup(req.body.username, req.body.name, hash)
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

module.exports.index = index
module.exports.update = update
module.exports.signup = signup
module.exports.signin = signin

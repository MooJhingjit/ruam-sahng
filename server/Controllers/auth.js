
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const User = require('../Models/user')
const jwt = require('jsonwebtoken')
// const signup = (req, res) => {
//   bcrypt.hash(req.body.data.password, 10, function(err, hash){
//     if(err) {
//        return res.status(500).json({
//           error: err
//        })
//     }
//     else {
//       const user = new User({
//         _id: new  mongoose.Types.ObjectId(),
//         name: req.body.data.name,
//         username: req.body.data.username,
//         password: hash    
//       })
//       user.save().then(function(result) {
//         res.status(200).json({
//             success: 'New user has been created'
//         })
//       }).catch(error => {
//         res.status(500).json({
//             error: err
//         })
//       })
//     }
//   })
// }

const login = (req, res) => {
  User.findOne({username: req.body.data.username})
  .exec()
  .then(function(user) {
     bcrypt.compare(req.body.data.password, user.password, function(err, result){
        if(err) {
           return res.status(401).json({
              failed: 'Unauthorized Access'
           })
        }
        if(result) {
          const JWTToken = jwt.sign({
            username: user.username,
            _id: user._id
          },
          'RuamSahng',
          {
            expiresIn: '12h'
          })
          return res.status(200).json({token: JWTToken})
        }
        return res.status(401).json({
           failed: 'Unauthorized Access'
        })
     })
  })
  .catch(error => {
     res.status(500).json({
        error: error
     })
  })
}

// module.exports.signup = signup
module.exports.login = login
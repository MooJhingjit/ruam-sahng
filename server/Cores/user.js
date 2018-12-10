const User = require('../Models/user');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const config = require('../Config/app.js')

const get = async (obj) => {
  let condition = {}
  if (obj.mainSearch) {
    condition.name = { '$regex' : obj.mainSearch, '$options' : 'i' }
  }
  if (!obj.perPage) {
    obj.perPage = 0
  }
  let sort = {}
  if (obj.sort) {
    let sortArr = obj.sort.split(',')
    sortArr.forEach(sortItem => {
      let str = sortItem.split('|')
      sort[str[0]] = str[1]
    })
  } else {
    sort.createdAt = 'desc'
  }
  let users = await User.find(condition).sort(sort).limit(obj.perPage).skip(obj.from)
  // console.log(users)
  let result = {}
  if (obj.type == 'table') {
    result.total = await User.find(condition).count()
    result.data = await getFullData(users)
  }
  
  return result
}

const getFullData = async (data) => {
  let newData = []
  if (data.length) {
        for (let i = 0; i < data.length; i++){
          let user = data[i]
          newData.push(user)
        }
    return newData
  }
}

const getById = async (userId) => {
  let user = await User.findOne({_id: userId})
  return {
    _id: user._id,
    name: user.name,
    username: user.username,
    department: user.department,
    qcSection: user.qcSection,
    createdAt: user.createdAt,
    role: config.appConfig.qcSection.filter((item) => {
      return item.key === user.qcSection
    }).map((item) => {
      return item.role
    })[0]
  }
}

const store = async (hash, userObj) => {
  const user = new User({
    _id: new  mongoose.Types.ObjectId(),
    username: userObj.username,
    name: userObj.name,
    password: hash,
    department: userObj.department,
    qcSection: userObj.qcSection
  });
  try {
    user.save()
    return true
  } catch (error) {
    return false
  }
}

const update = async (userId, userObj) => {
  let userUpdate = {}
  if (userObj.oldPass !== null && userObj.newPass !== null) { // change password
    // check old pass
    let user = await User.findOne({_id: userId})
    let isMatch = await bcrypt.compare(userObj.oldPass, user.password)
    if (!isMatch) {
      return {
        isPass: false,
        type: 'password'
      }
    }
    userUpdate.password = await bcrypt.hash(userObj.newPass, 10)
  }
  userUpdate.name = userObj.name
  userUpdate.username = userObj.username
  userUpdate.department = userObj.department
  if (userObj.department === 'qc') {
    userUpdate.qcSection = userObj.qcSection
  } else {
    userUpdate.qcSection = ''
  }
  try {
    await User.findOneAndUpdate({_id: userId}, userUpdate)
    return {
      isPass: true,
      type: ''
    }
  } catch (error) {
    console.log(error)
    return {
      isPass: false,
      type: ''
    }
  }
}

const remove = async (userId) => {
  try {
    await User.findByIdAndRemove({_id: userId})
    return true
  } catch (error) {
    return false
  }
}

const signup = async (username, name, hash) => {
  const user = new User({
    _id: new  mongoose.Types.ObjectId(),
    username: username,
    name: name,
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
        return {res: true, msg: 'Welcome to the JWT Auth', token: JWTToken, userId: user._id}
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

module.exports.get = get
module.exports.signup = signup
module.exports.signin = signin
module.exports.getById = getById
module.exports.update = update
module.exports.store = store
module.exports.remove = remove


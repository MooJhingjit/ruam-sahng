const bcrypt = require('bcrypt');
const UserCore = require('../Cores/user.js')
const config = require('../Config/app.js')
const Helper = require('../Libraries/helper.js')

const getDataTable = async (req, res, next) => {
  let tableConfig = Helper.getTableConfig(req.query.page, 5) // 10 is per page
  let result = await UserCore.get({
    type: 'table',
    mainSearch: req.query.mainSearch,
    perPage: tableConfig.perPage,
    from: tableConfig.from,
    sort: req.query.sort
    // to: tableConfig.to,
  })
  let total = (!result) ? 0 : result.total
  res.status(200).json({
    current_page: tableConfig.currentPage,
    from: tableConfig.from,
    last_page: Math.ceil(total / tableConfig.perPage),
    next_page_url: getPageUrl(req, parseInt(tableConfig.currentPage) + parseInt(1)),
    per_page: tableConfig.perPage, // req.query.per_page
    prev_page_url: getPageUrl(req, parseInt(tableConfig.currentPage) - parseInt(1)),
    to: tableConfig.to,
    total: total,
    data: (!result) ? [] : result.data,
    msg: 'success'}
  )
}

const getPageUrl = (req, currentPage) => {
  return `${req.protocol}//${req.headers.host}/api/users?/&sort=&page=${currentPage}`
}

const store = async (req, res, next) => {
  bcrypt.hash(req.body.data.newPass, 10, function(err, hash){
    if(err) {
       return res.status(500).json({
          error: err
       });
    }
    else {
      let result = UserCore.store(req, hash, req.body.data)
      if (result) {
        res.status(200).json({});
      } else {
        res.status(422).json({});
      }
    }
  });
}

const edit = async (req, res, next) => {
  let result = {}
  result.department = config.appConfig.userDepartment
  result.qcSection = config.appConfig.qcSection
  if (req.params.key !== 'new') {
    result.user = await UserCore.getById(req.params.key)
  }
  res.status(200).json({result, msg: 'success'})
}

const update = async (req, res, next) => {
  let result = await UserCore.update(req, req.params.key, req.body.data)
  if (!result.isPass) {
    res.status(422).json({data: result, msg: 'error'})
  }
  res.status(200).json({data: result, msg: 'success'})
}

const remove = async (req, res, next) => {
  let result = await UserCore.remove(req.params.key)
  if (result) {
    return res.status(200).json({});
  } else {
    return res.status(422).json({});
  }
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

module.exports.edit = edit
module.exports.store = store
module.exports.update = update
module.exports.signup = signup
module.exports.signin = signin
module.exports.delete = remove
module.exports.getDataTable = getDataTable



const APP = require('../Cores/app.js')
const getAppData = (req, res, next) => {
  let result = APP.index()
  res.status(200).json({data: result, msg: 'success'})
}

module.exports.getAppData = getAppData
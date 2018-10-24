
const APP = require('../Cores/app.js')
const getAppData = (req, res, next) => {
  console.log('call methodOne')
  APP.index()
  res.status(200).json({})
}

module.exports.getAppData = getAppData
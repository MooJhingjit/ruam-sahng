
const AppCore = require('../Cores/app.js')
const getAppData = async (req, res, next) => {
  let result = await AppCore.index(req)
  res.status(200).json({data: result, msg: 'success'})
}

const getNotification = async (req, res, next) => {
  let result = await AppCore.getNotification(req)
  res.status(200).json({data: result, msg: 'success'})
}


module.exports.getAppData = getAppData
module.exports.getNotification = getNotification
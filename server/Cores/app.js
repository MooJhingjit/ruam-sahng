
const UserCore = require('../Cores/user.js')
const ProductCore = require('../Cores/product.js')
const Helper = require('../Libraries/helper.js')

const index = async (req) => {
  let user = await UserCore.getById(req.userId)
  let result = {
    appData: {
      logo: `${Helper.hostName(req)}/static/images/Logo.jpg`
    },
    user
  }
  return result
}

const getNotification = async (req) => {
  let count = await ProductCore.countProduct('done')
  let result = {
    productReview: count
  }
  return result
}

module.exports.index = index
module.exports.getNotification = getNotification
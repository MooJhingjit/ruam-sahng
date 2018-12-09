
const UserCore = require('../Cores/user.js')
const ProductCore = require('../Cores/product.js')

const index = async (req) => {
  let user = await UserCore.getById(req.userId)
  let result = {
    appData: 'appData1',
    user
  }
  return result
}

const getNotification = async (req) => {
  let count = await ProductCore.countProduct('review')
  let result = {
    productReview: count
  }
  return result
}

module.exports.index = index
module.exports.getNotification = getNotification
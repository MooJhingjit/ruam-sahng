
const UserCore = require('../Cores/user.js')

const index = async (req) => {
  let user = await UserCore.get(req.userId)
  let result = {
    appData: 'appData1',
    user
  }
  return result
}

module.exports.index = index
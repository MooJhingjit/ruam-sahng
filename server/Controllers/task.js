
const TaskCore = require('../Cores/task.js')

const update = async (req, res, next) => {
  let result = await TaskCore.update(req, req.params.key, req.body.data)
  if (!result) {
    res.status(422).json({msg: 'error'})
    return
  }
  res.status(200).json({result, msg: 'success'})
}

module.exports.update = update
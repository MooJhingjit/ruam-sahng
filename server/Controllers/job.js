
const JobCore = require('../Cores/job.js')
const create = (req, res, next) => {
  let result = JobCore.index()
  res.status(200).json({result, msg: 'success'})
}

const store = (req, res, next) => {
  let result = JobCore.store(req, req.body.data.input)
  res.status(200).json({result, msg: 'success'})
}

module.exports.create = create
module.exports.store = store
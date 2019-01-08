
const JobCore = require('../Cores/job.js')
const CustomerCore = require('../Cores/customer.js')
const ProductCore = require('../Cores/product.js')
const config = require('../Config/app.js')

const index = (req, res, next) => {
  let result = {config: config.appConfig}
  res.status(200).json({result, msg: 'success'})
}

const get = async (req, res, next) => {
  let result = {}
  result.job = await JobCore.get(req.params.key)
  if (result.job._id === undefined) {
    // res.status(401).json({})
  }
  result.customer = await CustomerCore.get(result.job.cusId)
  result.product = await ProductCore.getByJob(result.job._id)
  result.config = config.appConfig
  // console.log(result)
  res.status(200).json({result, msg: 'success'})
}



const store = (req, res, next) => {
  let result = JobCore.store(req, req.body.data.input)
  res.status(200).json({result, msg: 'success'})
}

const update = (req, res, next) => {
  let result = JobCore.update(req, req.body.data.input)
  res.status(200).json({result, msg: 'success'})
}

const remove = async (req, res, next) => {
  await JobCore.remove(req.params.key)
  return res.status(200).json({});
}

module.exports.get = get
module.exports.index = index
module.exports.store = store
module.exports.update = update
module.exports.remove = remove

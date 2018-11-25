
const ProductCore = require('../Cores/product.js')
const index = (req, res, next) => {
  // let result = JobCore.create()
  // res.status(200).json({result, msg: 'success'})
}

const edit = async (req, res, next) => {
  let result = await ProductCore.edit(req.params.key)
  if (!result) {
    res.status(401).json({msg: 'error'})
    return
  }
  res.status(200).json({result, msg: 'success'})
}

const update = async (req, res, next) => {
  let result = await ProductCore.update(req.params.key, req.body.data)
  if (!result) {
    res.status(401).json({msg: 'error'})
    return
  }
  res.status(200).json({result, msg: 'success'})
}

module.exports.index = index
module.exports.edit = edit
module.exports.update = update
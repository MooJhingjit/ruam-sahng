
const ProductCore = require('../Cores/product.js')
const index = async (req, res, next) => {
  let result = await ProductCore.get({type: 'table', mainSearch: req.query.mainSearch})
  if (!result) {
    res.status(422).json({msg: 'error'})
    return
  }
  res.status(200).json({result, msg: 'success'})
}

const edit = async (req, res, next) => {
  let result = await ProductCore.edit(req.params.key)
  if (!result) {
    res.status(422).json({msg: 'error'})
    return
  }
  res.status(200).json({result, msg: 'success'})
}

const update = async (req, res, next) => {
  let result = await ProductCore.update(req.params.key, req.body.data)
  if (!result) {
    res.status(422).json({msg: 'error'})
    return
  }
  res.status(200).json({result, msg: 'success'})
}

const updateStatus = async (req, res, next) => {
  let status = req.body.data.status
  let result = {}
  if (status === 'done') {
    result = await ProductCore.updateStatus(req.params.key, status)
  } else if (status === 'delete') {
    result = await ProductCore.remove(req.params.key)
  }
  if (!result) {
    res.status(422).json({msg: 'error'})
    return
  }
  res.status(200).json({result, msg: 'success'})
}

module.exports.index = index
module.exports.edit = edit
module.exports.update = update
module.exports.updateStatus = updateStatus
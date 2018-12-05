
const ProductCore = require('../Cores/product.js')
const Helper = require('../Libraries/helper.js')
const getDataTable = async (req, res, next) => {
  let tableConfig = Helper.getTableConfig(req.query.page, req.query.per_page)
  let result = await ProductCore.get({
    type: 'table',
    mainSearch: req.query.mainSearch,
    perPage: tableConfig.perPage,
    from: tableConfig.from,
    // to: tableConfig.to,
  })
  let total = (!result) ? 0 : result.total
  res.status(200).json({
    current_page: tableConfig.currentPage,
    from: tableConfig.from,
    last_page: Math.ceil(total / tableConfig.perPage),
    next_page_url: 'http://localhost:3000/api/products?/&sort=&page=' + (parseInt(req.query.page) + parseInt(1)) + '&per_page=' + 1,
    per_page: tableConfig.perPage, // req.query.per_page
    prev_page_url: 'http://localhost:3000/api/products?/&sort=&page=' + (parseInt(req.query.page) - parseInt(1)) + '&per_page=' + 1,
    // to: tableConfig.to,
    total: total,
    data: (!result) ? [] : result.data,
    msg: 'success'}
  )
}

// const tranfromData = async (data) => {
  
//   let newData = []
//   if (data.length) {
//     await Promise.all(
//       data.map( async (product) => {
//         let item = {}
//         item.product = product
//         try {
//           item.job = await JobCore.get(product.jobId)
//           item.customer = await CustomerCore.get(item.job.cusId)
//           item.tasks = await TaskCore.getByProduct(product._id)
//           newData.push(item)
//         } catch (error) {
//           console.log(error)
//           return false
//         }
//       })
//     )
//   }
//   console.log(newData)
//   return newData
// }

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

module.exports.getDataTable = getDataTable
module.exports.edit = edit
module.exports.update = update
module.exports.updateStatus = updateStatus
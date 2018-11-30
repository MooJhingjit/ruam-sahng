const ProductCore = require('../Cores/product.js')

const index = async (req, res, next) => {
  let products = await ProductCore.get({type: 'schedule'})
  // console.log(products)
  if (!products) {
    res.status(401).json({msg: 'error'})
    return
  }
  let result = []
  if (products.length) {
    products.map((item) => {
      // console.log(item.product.createdAt)
      let tasks = item.tasks.map((taskItem) => {
        return {
          key: '',
          dateStart: taskItem.dateStart,
          dateEnd: taskItem.dateEnd,
          status: taskItem.status,
          isDisable: taskItem.isDisable
        }
      })
      tasks.unshift({ // first td in tr
        key: 'itemName',
        dateStart: item.product.createdAt,
        dateEnd: item.product.dateEnd,
        status: item.product.status,
        isDisable: false,
      })
      result.push(
        {
          header: {
            jobCode: item.job.code,
            cusName: item.customer.name,
            productName: item.product.name,
            status: item.product.status,
          },
          tasks
        }
      )
    })
  }
  res.status(200).json({result, msg: 'success'})
}


module.exports.index = index
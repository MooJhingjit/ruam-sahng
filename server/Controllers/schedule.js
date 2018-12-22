const ProductCore = require('../Cores/product.js')

const index = async (req, res, next) => {
  let products = await ProductCore.get({type: 'schedule'})
  // console.log(products)
  if (!products) {
    res.status(401).json({msg: 'error'})
    return
  }
  let result = []
  if (products.data.length) {
    products.data.map((item) => {
      let tasks = item.tasks.map((taskItem) => {
        return {
          key: '',
          taskTitle: taskItem.department,
          dateStart: taskItem.dateStart,
          dateEnd: taskItem.dateEnd,
          status: taskItem.status,
          isDisable: taskItem.isDisable
        }
      })
      tasks.unshift({ // first td in tr
        key: 'itemName',
        taskTitle: '',
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
  let config = {
    rows: 6,
    time: 10000
  }
  res.status(200).json({result, config, msg: 'success'})
}


module.exports.index = index
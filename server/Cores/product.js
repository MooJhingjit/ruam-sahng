
// only this level can call database directly
// const config = require('../Config/app.js')
const mongoose = require('mongoose');
const Product = require('../Models/product');
const TaskCore = require('./task.js');
const JobCore = require('./job.js');
const CustomerCore = require('./customer.js');
const store = async (jobObj, products) => {
  if (products.length) {
    await Promise.all(
      products.map( async (product) => {
        try {
          const newProduct = new Product({
            _id: new  mongoose.Types.ObjectId(),
            jobId: jobObj._id,
            name: product.name,
            amount: product.amount,
            thickness: product.thickness,
            note: product.note,
            dateEnd: product.dateEnd,
            type: product.type,
            departmentSelected: product.departmentSelected,
            equipment: product.equipment,
            colorType: product.colorType,
            accessory: product.accessory,
            surface: (product.options.surface)? product.options.surface : null,
            colorName: (product.options.colorName)? product.options.colorName :  null,
            status: 'ip'
          });
          let newProductObj = await newProduct.save()
          await TaskCore.store(newProductObj, product)
        } catch (error) {
          console.log(error)
          return false
        }
      })
    )
  }
}

const edit = async (productId) => {
  let result = {}
  try {
    result.product = await Product.findById(productId)
    result.job = await JobCore.get(result.product.jobId)
    result.customer = await CustomerCore.get(result.job.cusId)
    result.tasks = await TaskCore.getByProduct(productId)
    return result
  } catch (error) {
    console.log(error)
    return false
  }
}

const update = async (productId, product) => {
  let result = {}
  try {
    let tasks = await TaskCore.update(productId, product.tasks)
    // check product completed
    let productCompleted = true
    tasks.map((task, index) => {
      if (!task.isDisable && task.status !== 'done') {
        productCompleted = false
      }
    })
    if (productCompleted) {
      await Product.findOneAndUpdate({_id: productId}, {
        status: 'done'
      })
    }
    return result
  } catch (error) {
    console.log(error)
    return false
  }
}

module.exports.store = store
module.exports.edit = edit
module.exports.update = update

// only this level can call database directly
// const config = require('../Config/app.js')
const mongoose = require('mongoose');
const Product = require('../Models/product');
const TaskCore = require('./task.js');
const JobCore = require('./job.js');
const CustomerCore = require('./customer.js');

const get = async (obj) => {
  let condition = {}
  if (obj.mainSearch) {
    condition.name = { '$regex' : query.mainSearch, '$options' : 'i' }
  }
  if (!obj.perPage) {
    obj.perPage = 0
  }
  // console.log(obj)
  let products = await Product.find(condition).sort({createdAt: 'desc'}).limit(obj.perPage).skip(obj.from)
  let result = {}
  if (obj.type == 'table' || obj.type == 'schedule') {
    result.total = await Product.count()
    result.data = await tranfromData(products)
    
  }
  
  return result
}

const tranfromData = async (data) => {
  let newData = []
  if (data.length) {
    await Promise.all(
      data.map( async (product) => {
        let item = {}
        item.product = product
        try {
          item.job = await JobCore.get(product.jobId)
          item.customer = await CustomerCore.get(item.job.cusId)
          item.tasks = await TaskCore.getByProduct(product._id)
          newData.push(item)
        } catch (error) {
          console.log(error)
          return false
        }
      })
    )
    // console.log(newData)
    return newData
  }
}

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
            equipment: (Array.isArray(product.equipment)) ? null : product.equipment,
            colorType: (Array.isArray(product.colorType)) ? null : product.colorType,
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
        status: 'review'
      })
    }
    return result
  } catch (error) {
    console.log(error)
    return false
  }
}

const updateStatus = async (productId, status) => {
  let result = {}
  try {
    await Product.findOneAndUpdate({_id: productId}, { status })
    return result
  } catch (error) {
    console.log(error)
    return false
  }
}

const remove = async (productId) => {
  try {
    await Product.findByIdAndRemove({_id: productId})
    await TaskCore.remove(productId)
    return true
  } catch (error) {
    console.log(error)
    return false
  }
}

module.exports.get = get
module.exports.store = store
module.exports.edit = edit
module.exports.update = update
module.exports.remove = remove
module.exports.updateStatus = updateStatus


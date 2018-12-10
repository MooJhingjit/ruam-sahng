
// only this level can call database directly
// const config = require('../Config/app.js')
const mongoose = require('mongoose');
const Product = require('../Models/product');
const TaskCore = require('./task.js');
const JobCore = require('./job.js');
const CustomerCore = require('./customer.js');
const config = require('../Config/app.js')
moment = require('moment')

const get = async (obj) => {
  let condition = {}
  if (obj.mainSearch) {
    switch (obj.searchType) {
      case 'jobCode':
        // ssss
        break
      case 'cusName':
        // ssss
        break
      case 'dateStart':
        // ssss
        break
      case 'dateEnd':
        // condition.dateEnd = Date('2018-12-26') 
        break
      default: // productName
        condition.name = { '$regex' : obj.mainSearch, '$options' : 'i' }
        break
    }
  }
  if (obj.type == 'schedule') {
    condition.status = { $ne: 'done' }
  }
  if (obj.searchStatusType && obj.searchStatusType  !== 'all') {
    condition.status = obj.searchStatusType
  }
  console.log(condition)
  if (!obj.perPage) {
    obj.perPage = 0
  }
  let sort = {}
  if (obj.sort) {
    let sortArr = obj.sort.split(',')
    sortArr.forEach(sortItem => {
      let str = sortItem.split('|')
      sort[str[0]] = str[1]
    })
  } else {
    sort.createdAt = 'desc'
  }
  let products = await Product.find(condition).sort(sort).limit(obj.perPage).skip(obj.from)
  let result = {}
  if (obj.type == 'table' || obj.type == 'schedule') {
    result.total = await Product.find(condition).count()
    result.data = await getFullData(products)
  }
  
  return result
}

const getFullData = async (data) => {
  let newData = []
  // let myObject = new Map()
  if (data.length) {
        for (let p = 0; p < data.length; p++){
          let item = {}
          let product = data[p]
          item.product = product
          try {
            item.job = await JobCore.get(product.jobId)
            item.customer = await CustomerCore.get(item.job.cusId)
            item.tasks = await TaskCore.getByProduct(product._id)
            // myObject.set(item)
            newData.push(item)
          } catch (error) {
            console.log(error)
            return false
          }
        }
    return newData
  }
}

const store = async (jobObj, products) => {
  if (products.length) {
    // await Promise.all(
      // products.map( async (product) => {
    for (let p = 0; p < products.length; p++){
      let product = products[p]
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
    }
      // })
    // )
  }
}

const edit = async (productId) => {
  let result = {}
  try {
    result.product = await Product.findById(productId)
    result.job = await JobCore.get(result.product.jobId)
    result.customer = await CustomerCore.get(result.job.cusId)
    result.tasks = await TaskCore.getByProduct(productId)
    result.config = {
      productType: config.appConfig.productType,
      equipment: config.appConfig.equipment,
      colorType: config.appConfig.colorType,
      accessory: config.appConfig.accessory
    }
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
    return {
      isReview: productCompleted
    }
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

countProduct = async (productStatus) => {
  try {
    let total = await Product.find({status: productStatus}).count()
    // console.log(total)
    return total
  } catch (error) {
    console.log(error)
    return 0
  }
}

module.exports.get = get
module.exports.store = store
module.exports.edit = edit
module.exports.update = update
module.exports.remove = remove
module.exports.updateStatus = updateStatus
module.exports.countProduct = countProduct


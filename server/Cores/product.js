
// only this level can call database directly
// const config = require('../Config/app.js')
const mongoose = require('mongoose');
const Product = require('../Models/product');
const TaskCore = require('./task.js');
const JobCore = require('./job.js');
const CustomerCore = require('./customer.js');
const config = require('../Config/app.js')
moment = require('moment')

const getByJob = async (JobId) => {
  try {
    let res = await Product.find({ jobId: JobId });
    return res
  } catch (error) {
    return {}
  }
}

const getTable = async (obj) => {
  let products = {}
  let condition = {}

  if (obj.type == 'schedule') {
    condition.status = { $nin: ['send'] }
  }
  if (obj.searchStatusType && obj.searchStatusType  !== 'all') {
    condition.status = obj.searchStatusType
  }
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
    sort.createdAt = 'asc'
  }

  if (obj.mainSearch) {
    switch (obj.searchType) {
      case 'jobCode':
      case 'cusName':
        let jobs = []
        if (obj.searchType === 'cusName') {
          let customers = await CustomerCore.findByName(obj.mainSearch)
          // if (customers.length) {
          let cusArr = []
          customers.map((item) => {
            cusArr.push(item._id)
          })
          // }
          jobs = await JobCore.findInArr('searchByCusId', cusArr)
        } else if (obj.searchType === 'jobCode') {
          jobs = await JobCore.findByCode(obj.mainSearch)
        }
        let jobsArr = []
        jobs.map((item) => {
          jobsArr.push(item._id)
        })
        condition.jobId = { "$in" : jobsArr}
        products = await Product.find(condition).sort(sort).limit(obj.perPage).skip(obj.from)
        break
      // case 'cusName':
        
      //     let jobsArr = []
      //     jobs.map((item) => {
      //       jobsArr.push(item._id)
      //     })
      //     condition.jobId = { "$in" : jobsArr}
      //     products = await Product.find(condition).sort(sort).limit(obj.perPage).skip(obj.from)
      //   break
      default: // productName
        condition.name = { '$regex' : obj.mainSearch, '$options' : 'i' }
        products = await Product.find(condition).sort(sort).limit(obj.perPage).skip(obj.from)
        break
    }
  } else {
    products = await Product.find(condition).sort(sort).limit(obj.perPage).skip(obj.from)
  }
  
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

const store = async (req, products, options) => {
  if (products.length) {
    // console.log('do')
    // await Promise.all(
      // products.map( async (product) => {
    for (let p = 0; p < products.length; p++){
      let product = products[p]
      try {
        const newProduct = new Product({
          _id: new  mongoose.Types.ObjectId(),
          jobId: options.jobId,
          cusId: options.cusId,
          name: product.name,
          amount: product.amount,
          thickness: product.thickness,
          note: product.note,
          dateEnd: product.dateEnd,
          type: product.type,
          otherTypeName: product.otherTypeName,
          departmentSelected: product.departmentSelected,
          equipment: (Array.isArray(product.equipment)) ? null : product.equipment,
          colorType: (Array.isArray(product.colorType)) ? null : product.colorType,
          accessory: product.accessory,
          surface: (product.options.surface)? product.options.surface : null,
          colorName: (product.options.colorName)? product.options.colorName :  null,
          status: 'ip',
          updatedBy: req.userObject.name
        });
        let newProductObj = await newProduct.save()
        await TaskCore.store(req, newProductObj, product, options)
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

const update = async (req, products, options = {}) => {
  try {
    // clear other product that not exist in lists
    let productIds = []
    products.map((item) => {
      productIds.push(item.id)
    })
    let productRemoveIds =  await Product.find({
      "_id": { "$nin": productIds,  },
      // "cusId": { "$eq": options.cusId},
      "jobId": { "$eq": options.jobId}
    }).select('_id')
    await Promise.all(
      productRemoveIds.map( async (item) => {
        await remove(item._id)
      })
    )
    // END
    await Promise.all(
      products.map( async (item) => {
        if (item.id === null) { // new one
          await store(req, [item], options)
        } else {
          await Product.findOneAndUpdate({_id: item.id}, {
            cusId: options.cusId,
            name: item.name,
            amount: item.amount,
            thickness: item.thickness,
            note: item.note,
            dateEnd: item.dateEnd,
            // type: item.type,
            otherTypeName: item.otherTypeName,
            // departmentSelected: item.departmentSelected,
            equipment: (Array.isArray(item.equipment)) ? null : item.equipment,
            colorType: (Array.isArray(item.colorType)) ? null : item.colorType,
            accessory: item.accessory,
            surface: (item.options.surface)? item.options.surface : null,
            colorName: (item.options.colorName)? item.options.colorName :  null,
            // status: 'ip',
            updatedBy: req.userObject.name
          })
        }
      })
    )
    return true
  } catch (err) {
    return false
  }
}

const updateStatus = async (req, productId, status) => {
  let result = {}
  try {
    let objUpdate = {
      status: status
    }
    if (status === 'send') {
      // console.log('do')
      objUpdate.sendAt = new Date()
    }
    objUpdate.updatedBy = req.userObject.name
    await Product.findOneAndUpdate({_id: productId}, objUpdate)
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

const removeByJob = async (jobId) => {
  try {
    let ObjectId = require('mongoose').Types.ObjectId; 
    let productRemoveIds =  await Product.find({ "jobId": { "$eq": new ObjectId(jobId)}  }).select('_id')
    // console.log(productRemoveIds)
    await Promise.all(
      productRemoveIds.map( async (item) => {
        await remove(item._id)
      })
    )
    return true
  } catch (error) {
    console.log(error)
    return false
  }
}


const getYearsAvailable = async () => {
  return Product.aggregate([
    {$group : {_id : { year: { $year: "$createdAt" } }}},
    {$sort:{"_id.year":-1}}
  ]
 )
}

const getMonthsAvailable = async (yearSelected) => {
  return Product.aggregate([
      {$project:{month: { $month: "$createdAt" }, year: { $year: "$createdAt" }}},
      {$match : { "year":  { "$in": yearSelected } } },
      {$group : {_id: {month:  "$month"}}},
      {$sort:{"_id.month":-1}}
  ])
}

const countProduct = async (productStatus) => {
  try {
    let total = await Product.find({status: productStatus}).count()
    // console.log(total)
    return total
  } catch (error) {
    console.log(error)
    return 0
  }
}

const filterByDate = async (years, months) => { // from summary page
  // let match = {}
  // match.year = { "$in": years }
  // match.months = { "$in": years }
  // match.sendAt = { "$in": years }
  return Product.aggregate([
    {
      $lookup: {
          from: 'customers',
          localField: 'cusId',
          foreignField: '_id',
          as: 'customer_docs'
      }
    },
    {
        $project: {
            jobId: 1,
            month: { $month: "$createdAt" },
            year: { $year: "$createdAt" },
            customer: "$customer_docs",
            cusId: 1,
            status: 1,
            dateEnd: { $dateToString: { format: "%Y-%m-%d", date: "$dateEnd" } },
            sendAt: { $dateToString: { format: "%Y-%m-%d", date: "$sendAt" } },
        }
    },
    {
      $project:{
        jobId: 1,
        month:  1,
        year:  1,
        customer: 1,
        cusId: 1,
        dateEnd: 1,
        sendAt: 1,
        status: 1,
        inTime:
        {
          $cond: { if: { $lte: [ "$sendAt", "$dateEnd" ] }, then: 1, else: 0 }
        },
        late:
        {
          $cond: { if: { $gt: [ "$sendAt", "$dateEnd" ] }, then: 1, else: 0 }
        },
      }
    },
    {$match : { "year":  { "$in": years }, "month":  { "$in": months }, "sendAt": { "$exists": true }, "status": { "$eq": 'send' }} },
    {
      $group: { 
        _id: "$cusId", 
        jobs: {$addToSet: "$jobId"},
        total: { $sum: 1 },
        inTime:{ $sum: "$inTime" },
        late:{ $sum: "$late" },
        customer:{ $addToSet: "$customer" },
    }
      
  },
  {$sort:{"total":-1}}
])
}

module.exports.getByJob = getByJob
module.exports.getTable = getTable
module.exports.store = store
module.exports.edit = edit
module.exports.update = update
module.exports.remove = remove
module.exports.filterByDate = filterByDate
module.exports.updateStatus = updateStatus
module.exports.countProduct = countProduct
module.exports.removeByJob = removeByJob
module.exports.getYearsAvailable = getYearsAvailable
module.exports.getMonthsAvailable = getMonthsAvailable



// only this level can call database directly
const config = require('../Config/app.js')
const Job = require('../Models/job');
const mongoose = require('mongoose');
const CustomerCore = require('./customer.js');
const ProductCore = require('./product.js');
const index = () => {
  return {config: config.appConfig}
}

const get = async (jobId) => {
  // console.log(`jobId => ${jobId}`)
  try {
    let job = await Job.findById(jobId)
    return job
  } catch (error) {
    return {}
  }
}

const store = async (req, inputs) => {
  // console.log(input)
  let header = inputs.header
  let products = inputs.products
  if (header.customer.id === null) {
    let cusId = await CustomerCore.store(req, header.customer)
    if (!cusId) return false
    header.customer.id = cusId
  }

  // console.log(header.customer.id)
  const newJob = new Job({
    _id: new  mongoose.Types.ObjectId(),
    cusId: header.customer.id,
    code: header.jobCode,
    updatedBy: req.userObject.name
  });
  try {
    let jobObj = await newJob.save()
    let res = await ProductCore.store(req, products, {cusId: header.customer.id, jobId: jobObj._id})
    return res
  } catch (error) {
    return false
  }
}

const update = async (req, inputs) => {
  let header = inputs.header
  let products = inputs.products
  let cusId = header.customer.id
  
  try {
    if (cusId === null) {
      cusId = await CustomerCore.store(req, header.customer)
    }
    let res = await Job.findOneAndUpdate({_id: header.jobId}, {
      code: header.jobCode,
      cusId
    })
    await ProductCore.update(req, products, {cusId: res.cusId, jobId: res._id})
  } catch (error) {
    return false
  }
  // const newJob = new Job({
  //   _id: new  mongoose.Types.ObjectId(),
  //   cusId: header.customer.id,
  //   code: header.jobCode,
  //   updatedBy: req.userObject.name
  // });
  // try {
  //   let jobObj = await newJob.save()
  //   let res = await ProductCore.store(req, jobObj, header.customer.id, products)
  //   return res
  // } catch (error) {
  //   return false
  // }
}

const findInArr = async (find, Arr) => {
  // console.log(Arr)
  try {
    let job = await Job.find({ cusId: { "$in" : Arr} })
    return job
  } catch (error) {
    return {}
  }
}

const findByCode = async (str) => {
  let job = await Job.find({code: { '$regex' : str, '$options' : 'i' }}, {_id:1})
  // console.log(cus)
  return job
}

const remove = async (jobId) => {
  try {
    await Job.findByIdAndRemove({_id: jobId})
    await ProductCore.removeByJob(jobId)
    return true
  } catch (error) {
    return false
  }
}
// const findByCustomer = async (cusName) => {
//   try {
//     let job = await Job.find({'cusId.name': { '$regex' : cusName, '$options' : 'i' }})
//     return job
//   } catch (error) {
//     return {}
//   }
// }

module.exports.get = get
module.exports.index = index
module.exports.store = store
module.exports.remove = remove
module.exports.update = update
module.exports.findInArr = findInArr
module.exports.findByCode = findByCode

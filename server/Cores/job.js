
// only this level can call database directly
const config = require('../Config/app.js')
const Job = require('../Models/job');
const mongoose = require('mongoose');
const CustomerCore = require('./customer.js');
const ProductCore = require('./product.js');
const create = () => {
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

const store = async (inputs) => {
  // console.log(input)
  let header = inputs.header
  let products = inputs.products
  if (header.customer.id === null) {
    let cusId = await CustomerCore.store(header.customer)
    if (!cusId) return false
    header.customer.id = cusId
  }

  // console.log(header.customer.id)
  const newJob = new Job({
    _id: new  mongoose.Types.ObjectId(),
    cusId: header.customer.id,
    code: header.jobCode
  });
  try {
    let jobObj = await newJob.save()
    let res = await ProductCore.store(jobObj, products)
    return res
  } catch (error) {
    return false
  }
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

// const findByCustomer = async (cusName) => {
//   try {
//     let job = await Job.find({'cusId.name': { '$regex' : cusName, '$options' : 'i' }})
//     return job
//   } catch (error) {
//     return {}
//   }
// }

module.exports.get = get
module.exports.create = create
module.exports.store = store
module.exports.findInArr = findInArr
module.exports.findByCode = findByCode

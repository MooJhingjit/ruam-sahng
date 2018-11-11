
// only this level can call database directly
const config = require('../Config/app.js')
const Job = require('../Models/job');
const mongoose = require('mongoose');
const CustomerCore = require('./customer.js');
const ProductCore = require('./product.js');
const create = () => {
  return {config: config.appConfig}
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

module.exports.create = create
module.exports.store = store
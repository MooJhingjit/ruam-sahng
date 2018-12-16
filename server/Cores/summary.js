

const ProductCore = require('../Cores/product.js')
moment = require('moment')

const getSummary = async (query) => {
  let years = query.years.split(',').map(function(item) {
      return parseInt(item);
  });
  let months = query.months.split(',').map(function(item) {
    return parseInt(item);
  });

  let data = await ProductCore.filterByDate(years, months)
  // console.log(data)
  return tranFormData(data)
}

const tranFormData = (data) => {
  let result = {
    data: [],
    number: {
      inTimeTotal: 0,
      lateTotal: 0,
      inTimePercent: 0,
      latePercent: 0,
    },
  }
  let total = 0
  let inTimeTotal = 0
  let lateTotal = 0
  data.map((element) => {
    let cusName = element.customer[0][0].name
    // console.log(cusName)
    result.data.push({cusName:cusName, allProduct: element.total, inTime: element.inTime, late: element.late})
    inTimeTotal += parseInt(element.inTime)
    lateTotal += parseInt(element.late)
    total += parseInt(element.total)
  })
  result.number.inTimeTotal = inTimeTotal
  result.number.lateTotal = lateTotal
  result.number.inTimePercent = ((inTimeTotal / total) * 100).toFixed(2)
  result.number.latePercent = ((lateTotal / total) * 100).toFixed(2)
  // console.log(result)
  return result
}


module.exports.getSummary = getSummary
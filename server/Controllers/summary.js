const ProductCore = require('../Cores/product.js')
const SummaryCore = require('../Cores/summary.js')
const config = require('../Config/app.js')
moment = require('moment')

const index = async (req, res, next) => {
  let years = await ProductCore.getYearsAvailable()
  let yearsAvailable = []
  years.forEach(item => {
    yearsAvailable.push({key: item._id.year, name: item._id.year})
  });
  let months = await ProductCore.getMonthsAvailable([parseInt(moment().format('YYYY'))])
  let monthsAvailable = []
  months.forEach(item => {
    monthsAvailable.push({key: item._id.month, name: config.appConfig.months[item._id.month]})
  });
  let result = {
    chart: null,
    yearsAvailable,
    monthsAvailable,
    items: []
  }
  res.status(200).json({result, msg: 'success'})
}

const getSummary = async (req, res, next) => {
  let years = req.query.years.split(',').map(function(item) {
      return parseInt(item);
  });
  // console.log(years)
  let months = await ProductCore.getMonthsAvailable(years)
  let monthsAvailable = []
  months.forEach(item => {
    monthsAvailable.push({key: item._id.month, name: config.appConfig.months[item._id.month]})
  });
  let dataSummary = await SummaryCore.getSummary(req.query)
  let result = {
    local: {
      monthsAvailable
    },
    chart: {
      datacollection: {
        labels: [`ไม่ทันกำหนดส่ง (%)`, `ทันกำหนดส่ง (%)`],
        datasets: [
          {
            label: 'Data One',
            backgroundColor: [
              'rgba(255, 99, 132, 0.3)',
              'rgba(124, 181, 57, 0.4)'
            ],
            data: [dataSummary.number.latePercent, dataSummary.number.inTimePercent]
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
      }
    },
    dataTable: dataSummary.data,
    numberSummary: dataSummary.number
  }
  res.status(200).json({result, msg: 'success'})
}


module.exports.index = index
module.exports.getSummary = getSummary
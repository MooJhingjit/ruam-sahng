
// const JobCore = require('../Cores/product.js')
const index = (req, res, next) => {
  // let result = JobCore.create()
  // res.status(200).json({result, msg: 'success'})
}

const edit = (req, res, next) => {
  let result = {
    job: {
      code: 'C61-08-108',
      cus: {
        name: 'Summit network'
      },
      createDate: '10/11/2018',
    },
    product: {
      name: 'product name',
      amount: null,
      thickness: null,
      note: null,
      dateEnd: '10/12/2018',
      type: null,
      departmentSelected: null,
      equipment: null,
      colorType: null,
      accessory: null,
      surface: null,
      colorName: null
    },
    tasks: [
      {
        department: 'สเปคงาน', dateStart: '20/09/2018', dateEnd: '20/09/2018', note: 'ทดสอบ', status: 'done'
      },
      {
        department: 'แบบ', dateStart: '', dateEnd: '', note: '', status: 'padding'
      },
      {
        department: 'ตัด', dateStart: '', dateEnd: '', note: '', status: 'padding'
      },
      {
        department: 'พันท์', dateStart: '', dateEnd: '', note: '', status: 'padding'
      },
      {
        department: 'พับ', dateStart: '', dateEnd: '', note: '', status: 'padding'
      },
      {
        department: 'เชื่อมประกอบ', dateStart: '', dateEnd: '', note: '', status: 'disable'
      },
      {
        department: 'พ่นสี', dateStart: '', dateEnd: '', note: '', status: 'padding'
      },
      {
        department: 'ประกอบสำเร็จรูป', dateStart: '', dateEnd: '', note: '', status: 'padding'
      },
      {
        department: 'อุปกรณ์', dateStart: '', dateEnd: '', note: '', status: 'padding'
      },
      {
        department: 'วายริ่ง', dateStart: '', dateEnd: '', note: '', status: 'padding'
      }
    ]
  }
  res.status(200).json({result, msg: 'success'})
}

module.exports.index = index
module.exports.edit = edit
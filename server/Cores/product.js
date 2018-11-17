
// only this level can call database directly
// const config = require('../Config/app.js')
const mongoose = require('mongoose');
const Product = require('../Models/product');
const TaskCore = require('./task.js');
const JobCore = require('./job.js');
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
  let result1 = {}
  try {
    result1.product = await Product.findById(productId)
    // result1.job = await JobCore.get(result1.product.jobId)
    result1.job = {
      code: 'C61-08-108',
      cus: {
        name: 'Summit network'
      },
      createDate: '10/11/2018',
    }
    result1.tasks = await TaskCore.getByProduct(productId)
    return result1
    // console.log(result1)
  } catch (error) {
    console.log(error)
    return false
  }
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
  return result
}

module.exports.store = store
module.exports.edit = edit
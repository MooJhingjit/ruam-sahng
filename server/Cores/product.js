
// only this level can call database directly
// const config = require('../Config/app.js')
const mongoose = require('mongoose');
const Product = require('../Models/product');
const TaskCore = require('./task.js');
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

module.exports.store = store

// only this level can call database directly
// const config = require('../Config/app.js')
const mongoose = require('mongoose');
const Product = require('../Models/product');
const store = async (jobObj, products) => {
  // console.log('---------------')
  // console.log(products.length)
  // console.log('---------------')
  console.log(products)
  if (products.length) {
    await Promise.all(
      products.map( async (product) => {
        try {
          const newProduct = new Product({
            _id: new  mongoose.Types.ObjectId(),
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
            surface: (product.equipment === 2)? product.options.surface : null,
            colorName: (product.colorType === 2)? product.options.colorName :  null,
          });
          await newProduct.save()
        } catch (error) {
          console.log(error)
          return false
        }
      })
    )
  }
}

module.exports.store = store
const config = require('../Config/app.js')
const mongoose = require('mongoose');
const Task = require('../Models/task');
const store = async (newProduct, product) => {
  let dateStart = new Date()
  let status = 'ip'
  await Promise.all(
    config.appConfig.productDepartment.map( async (task) => {
      if (task.key > 2) {
        dateStart = null
        status = 'wait'
      }
      try {
        const newTask = new Task({
          _id: new  mongoose.Types.ObjectId(),
          productId: newProduct._id,
          departmentId: task.key,
          dateStart,
          dateEnd: null,
          node: null,
          status,
          isDisable: (product.departmentSelected.indexOf(task.key) === -1)
        });
        await newTask.save()
      } catch (error) {
        console.log(error)
        return false
      }
    })
  )
}

module.exports.store = store
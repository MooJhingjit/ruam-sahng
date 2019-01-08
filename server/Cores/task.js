const config = require('../Config/app.js')
const mongoose = require('mongoose');
const Task = require('../Models/task');
const ProductCore = require('./product.js')

const getByProduct = async (productId) => {
  try {
    let tasks = await Task.find({ productId }).sort({order: 'asc'})
    return tasks
  } catch (error) {
    return {}
  }
}

const store = async (req, newProduct, product) => {
  let dateStart = new Date()
  let status = 'ip'
  // await Promise.all(
    // config.appConfig.productDepartment.map( async (task) => {
      // console.log(task.key)
    for (let t = 0; t < config.appConfig.productDepartment.length; t++){
      let task = config.appConfig.productDepartment[t]
      if (task.key > 2) {
        dateStart = null
        status = 'wait'
      }
      try {
        const newTask = new Task({
          _id: new  mongoose.Types.ObjectId(),
          order: task.key,
          productId: newProduct._id,
          department: task.name,
          dateStart,
          dateEnd: null,
          note: '',
          status,
          isDisable: (product.departmentSelected.indexOf(task.key) === -1),
          updatedBy: req.userObject.name
        });
        await newTask.save()
      } catch (error) {
        console.log(error)
        return false
      }
    }
    // })
  // )
}


const update = async (req, productId, product) => {
  let result = {}
  try {
    let tasks = await updateTask(req, productId, product.tasks)
    // check product completed
    let productCompleted = true
    tasks.map((task, index) => {
      if (!task.isDisable && task.status !== 'done') {
        productCompleted = false
      }
    })
    if (productCompleted) {
      await ProductCore.updateStatus(req, productId, 'done')
      // await Product.findOneAndUpdate({_id: productId}, {
      //   status: 'done',
      //   updatedBy: req.userObject.name
      // })
    }
    return {
      isReview: productCompleted
    }
  } catch (error) {
    console.log(error)
    return false
  }
}

const updateTask = async (req, productId, tasks) => {
  let today = ''
  let nextTask = []
  for (let t = 0; t < tasks.length; t++){
    let task = tasks[t]
    let currentStatus = JSON.parse(JSON.stringify(task.status))
    today = new Date()
    let currentTask = task.order
    let dateStart = null // start working
    if (nextTask.length && nextTask.indexOf(currentTask) !== -1) {
      dateStart = today
      let taskIndex = nextTask.indexOf(currentTask)
      nextTask.splice(taskIndex, 1)
    }
    if (task.done) {
      dateStart = today
      task.status = 'done'
      nextTask.push(findNextTask(currentTask, tasks))
      if (currentTask === 8 || currentTask === 9) {
        nextTask.push( geWiringDate(currentTask, tasks))
      }
    } else {
      today = (task.status === 'done') ? task.dateEnd : ''
      task.status = (dateStart !== null) ? 'ip' : task.status
    }
    // console.log(nextTask)
    try {
      // console.log(task)
      let obj = {
        update: {
          dateStart: (dateStart !== null) ? dateStart : task.dateStart,
          dateEnd: today,
          note: task.note,
          status: task.status
        }
      }
      if (task.isMainTask && currentStatus === 'ip') {
        obj.update.updatedBy= req.userObject.name
      }
      await Task.findOneAndUpdate({_id: task._id}, obj.update)
    } catch (error) {
      console.log(error)
      return false
    }
  }
    // })
  // )
  // console.log(tasks)
  return tasks
}

const findNextTask = (currentTask, allTask) => {
  // console.log('------')
  let disableTasks = allTask.filter((item) => {
    return item.isDisable
  }).map((task) => {
    return task.order
  })
  // console.log(disableTasks)
  let productDepartmentConfig = JSON.parse(JSON.stringify(config.appConfig.productDepartment))
  // console.log(productDepartmentConfig)
  let nextTask = productDepartmentConfig.filter( (task) => {
    return (task.key === currentTask)
  })
  // console.log('------')
  // console.log(nextTask)
  if ((disableTasks.indexOf(nextTask[0].nextTask) !== -1)) {
    do {
      nextTask[0].nextTask = parseInt(nextTask[0].nextTask) + parseInt(1) 
    } while (disableTasks.indexOf(nextTask[0].nextTask) !== -1) 
  }
  // console.log(nextTask[0].nextTask)
  // console.log('------')
  return nextTask[0].nextTask
}

const geWiringDate = (currentTask, tasks) => {
  let otherTask = ''
  if (currentTask === 8) {
    otherTask = tasks[9 - 1]
    // console.log(tasks[9 - 1]) // 8 === อุปกรณ์ start by 0
  } else if (currentTask === 9) {
    otherTask = tasks[8 - 1]
    // console.log(tasks[8 - 1]) // 7 === ประกอบสำเร็จรูป start by 0
  }
  if (otherTask.status === 'done') {
    return 10 // next task is 10
  }
  return ''
}

const remove = async (productId) => {
  try {
    await Task.find({productId: productId}).remove()
    return true
  } catch (error) {
    console.log(error)
    return false
  }
}

module.exports.store = store
module.exports.getByProduct = getByProduct
module.exports.remove = remove
module.exports.update = update
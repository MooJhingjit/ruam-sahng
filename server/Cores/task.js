const config = require('../Config/app.js')
const mongoose = require('mongoose');
const Task = require('../Models/task');

const getByProduct = async (productId) => {
  try {
    let tasks = await Task.find({ productId }).sort({order: 'asc'})
    return tasks
  } catch (error) {
    return {}
  }
}

const store = async (newProduct, product) => {
  let dateStart = new Date()
  let status = 'ip'
  await Promise.all(
    config.appConfig.productDepartment.map( async (task) => {
      // console.log(task.key)
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

const update = async (productId, tasks) => {
  let today = ''
  let status = ''
  let nextTask = []
  // console.log(tasks)
  await Promise.all(
    tasks.map( async (task, index) => {
      today = new Date()
      let currentTask = task.order
      let dateStart = null // start working
      // console.log(task.order)
      // console.log(index + ' ' + task.department)
      // console.log(currentTask + ' <==> ' + nextTask)
      if (nextTask.length && nextTask.indexOf(currentTask) !== -1) {
        dateStart = today
        let taskIndex = nextTask.indexOf(currentTask)
        nextTask.splice(taskIndex, 1)
        // nextTask = null
      }
      if (task.done) {
        dateStart = today
        status = 'done'
        nextTask.push(findNextTask(currentTask, tasks))
        if (currentTask === 8 || currentTask === 9) {
          nextTask.push( geWiringtDate(currentTask, tasks))
        }
      } else {
        today = (task.status === 'done') ? task.dateEnd : ''
        status = (dateStart !== null) ? 'ip' : task.status
      }
      // waiting for 8 or 9 is completed
      // console.log(nextTask)
      try {
        await Task.findOneAndUpdate({_id: task._id}, {
          dateStart: (dateStart !== null) ? dateStart : task.dateStart,
          dateEnd: today,
          note: task.note,
          status
        })
      } catch (error) {
        console.log(error)
        return false
      }
    })
  )
  return true
}

const findNextTask = (currentTask, allTask) => {
  // console.log(allTask)
  // filter disable tasks
  let disableTasks = allTask.filter((item) => {
    return item.isDisable
  }).map((task) => {
    return task.order
  })
  // console.log(disableTasks)
  let nextTask = config.appConfig.productDepartment.filter( (task) => {
    return (task.key === currentTask)
  })
  if ((disableTasks.indexOf(nextTask[0].nextTask) !== -1)) {
    do {
      console.log(nextTask[0].nextTask)
      nextTask[0].nextTask = parseInt(nextTask[0].nextTask) + parseInt(1) 
      console.log(nextTask[0].nextTask)
    } while (disableTasks.indexOf(nextTask[0].nextTask) !== -1) 
  }
  // console.log(nextTask[0].nextTask)
  return nextTask[0].nextTask
}

const geWiringtDate = (currentTask, tasks) => {
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

module.exports.store = store
module.exports.getByProduct = getByProduct
module.exports.update = update
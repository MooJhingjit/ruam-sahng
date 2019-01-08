const express = require('express')
const router = express.Router()
const auth = require('../Middlewares/auth')
const taskController = require('../Controllers/task.js')

router.put('/tasks/:key', auth.isAuthorized, taskController.update)

module.exports = router

const express = require('express')
const router = express.Router()
const auth = require('../Middlewares/auth')
const scheduleController = require('../Controllers/schedule.js')

router.get('/schedule', auth.isAuthorized, scheduleController.index)
// router.get('/schedule/:key', auth.isAuthorized, scheduleController.edit)
// router.put('/schedule/:key', auth.isAuthorized, scheduleController.update)
module.exports = router

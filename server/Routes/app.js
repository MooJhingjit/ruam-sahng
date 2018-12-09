const express = require('express')
const router = express.Router()
const auth = require('../Middlewares/auth')
const appController = require('../Controllers/app.js')

router.get('/app/resource', auth.isAuthorized, appController.getAppData)
router.get('/app/notification', auth.isAuthorized, appController.getNotification)


module.exports = router

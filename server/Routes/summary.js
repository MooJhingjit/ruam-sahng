const express = require('express')
const router = express.Router()
const auth = require('../Middlewares/auth')
const summaryController = require('../Controllers/summary.js')

router.get('/summary', auth.isAuthorized, summaryController.index)
router.get('/summary-filter', auth.isAuthorized, summaryController.getSummary)
module.exports = router

const express = require('express')
const router = express.Router()
const auth = require('../Middlewares/auth')
const jobController = require('../Controllers/job.js')

router.get('/job', auth.isAuthorized, jobController.create)
router.post('/job', auth.isAuthorized, jobController.store)
module.exports = router

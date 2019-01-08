const express = require('express')
const router = express.Router()
const auth = require('../Middlewares/auth')
const jobController = require('../Controllers/job.js')

router.get('/job', auth.isAuthorized, jobController.index)
router.get('/job/:key', auth.isAuthorized, jobController.get)
router.post('/job', auth.isAuthorized, jobController.store)
router.put('/job/:key', auth.isAuthorized, jobController.update)
router.delete('/job/:key', auth.isAuthorized, jobController.remove)
module.exports = router

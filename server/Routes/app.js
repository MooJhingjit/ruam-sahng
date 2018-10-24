const express = require('express');
const router = express.Router();
const auth = require('../Middlewares/auth');
const appController = require('../Controllers/app.js')

router.get('/app/resource', auth.isAuthorized, appController.getAppData);
module.exports = router;

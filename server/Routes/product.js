const express = require('express')
const router = express.Router()
const auth = require('../Middlewares/auth')
const productController = require('../Controllers/product.js')

router.get('/product', auth.isAuthorized, productController.index)
router.get('/product/:key', auth.isAuthorized, productController.edit)
// router.post('/product', auth.isAuthorized, productController.store)
module.exports = router

const express = require('express')
const router = express.Router()
const auth = require('../Middlewares/auth')
const productController = require('../Controllers/product.js')

router.get('/products', auth.isAuthorized, productController.getDataTable)
router.get('/products/:key', auth.isAuthorized, productController.edit)
router.put('/products/:key', auth.isAuthorized, productController.update)
router.put('/products/update-status/:key', auth.isAuthorized, productController.updateStatus)

module.exports = router

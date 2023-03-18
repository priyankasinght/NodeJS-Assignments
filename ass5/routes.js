const express = require('express')
const router = express. Router()
const controller = require('./controllers')

router.get('/getProducts', controller.getAllProducts) 
router.post('/createProduct', controller.createProduct)
router.put('/updateProduct', controller.updateProduct)
router.delete('/deleteProduct', controller.deleteProduct)

module.exports = router;
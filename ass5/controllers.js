// controllers.js

const Product = require('./model.product')

exports.getAllProducts = async (req, res) => {
    try {
        const productList = await Product.find()
        res.status(200).json(productList)
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

exports.createProduct = async (req, res) => {
    try {
        const data = req.body // data from request
        const product = new Product(data)
        const productValue = await product.save() // saving the data
        res.status(200).json(product)
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

exports.updateProduct = async (req, res) => {
    try {
        const id = req.body.id
        const data = req.body
        const product = await Product.findByIdAndUpdate(id, data, { new: true })
        res.json(product)
    } catch (err) {
        console.error(err.message)
        res.status(501).send('Update not processed')
    }
}

exports.deleteProduct = async (req, res) => {
    try {
        const id = req.body.id
        const product = await Product.findByIdAndDelete(id)
        res.json(product)
    } catch (err) {
        console.error(err.message)
        res.status(500).json({ error: err.message })
    }
}

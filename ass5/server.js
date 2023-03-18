const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const routes = require('./routes')

const app = express()

mongoose.connect('mongodb://localhost:27017/productsList')
.then(() => console.log('Connected!!!!'))
.catch((err) => console.log(err))


app.use(bodyParser.json())

app.use('/product', routes)

const port = 3300

app.listen(port, () => { 
    console.log('Server started !!!!!')
})

const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const app = express();

mongoose.connect('mongodb://localhost:27017/todoList')
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.log(`Error connecting to MongoDB: ${err}`));

app.use(express.json());
app.use('/api', routes);

const port = 3000;
app.listen(port, () => console.log(`Server started on port ${port}`));

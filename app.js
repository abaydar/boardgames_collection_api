const dotenv = require('dotenv')
dotenv.config()
const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')
const boardgamesRoutes = require('./routes/boardgames')
const bodyParser = require('body-parser')
const expressValidator = require('express-validator')

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('db connected'))

mongoose.connection.on('error', err => console.log(`DB connection error: ${err.message}`))

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(expressValidator())
// app.use('/', boardgamesRoutes)
const port = process.env.PORT || 3000

app.listen(port, () => {console.log(`listening on ${port}`)})

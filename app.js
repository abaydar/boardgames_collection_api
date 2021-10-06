const dotenv = require('dotenv')
dotenv.config()
const express = require('express')
const app = express()
const morgan = require('morgan')
const boardgamesRoutes = require('./routes/boardgames')
const bodyParser = require('body-parser')
const expressValidator = require('express-validator')
const {getBoardgames} = require('./queries')



const port = 3000

app.listen(port, () => {console.log(`listening on ${port}`)})

app.use(bodyParser.json())

app.get('/', () => getBoardgames)



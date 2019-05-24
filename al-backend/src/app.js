const express = require('express')
const bodyParser = require('body-parser')
const morgan =  require("morgan")
const config = require('./config/index')

const mongoose = require('mongoose')

const userRouter = require('./controllers/UserController')
const createUserRouter =  require('./controllers/CreateUserController');
const authUserRouter = require('./controllers/AuthenticateUser')

const app = express();

app.set('superNode-auth',config.configName)

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

mongoose.connect(config.database)

app.use('/authenticate',authUserRouter)
app.use('/create-user',createUserRouter)
app.use('/api/v1/user', userRouter)


module.exports = app

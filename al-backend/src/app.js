const express = require('express')
const bodyParser = require('body-parser')
const morgan =  require("morgan")
const cors = require('cors')
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
app.use(cors())


app.options("*", cors())

app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content-Type, Authorization"
	);
	res.header("Content-Type", "application/json");
	res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
	res.header("Access-Control-Allow-Credentials", "true");
	next();
}); 

mongoose.connect(config.database,{useNewUrlParser: true})

app.use('/authenticate',authUserRouter)
app.use('/create-user',createUserRouter)
app.use('/api/v1/user', userRouter)


module.exports = app

const connection = require('./connection');
const express = require('express')
const cors = require('cors');
const routes=express.Router();

const userController=require('./controllers/user/userController')
// routes.post('/register',userController.registeruser)
routes.post('/register',userController.registerUser)
routes.post('/login',userController.login)

routes.get('/fetchuser',userController.fetchUser)




module.exports=routes
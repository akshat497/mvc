const connection = require('./connection');
const express = require('express')
const cors = require('cors');
const routes=express.Router();

const userController=require('./controllers/user/userController');
const fetchUserDetails = require('./middlewares/fetchUserDetails');
// routes.post('/register',userController.registeruser)
routes.post('/register',userController.registerUser)
routes.post('/login',userController.login)

routes.get('/fetchuser',fetchUserDetails,userController.fetchUser)




module.exports=routes
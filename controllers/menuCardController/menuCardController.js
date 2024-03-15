const User=require('../../modals/user')
const bcrypt=require( 'bcrypt');
const jwt=require("jsonwebtoken");
const handleResponse  = require('../services/handleResponse');
const Menu = require('../../modals/menuCardModel');

const menuCardController={
    addMenuCard:async(req,res)=>{
        try {
            const {name,price,description,image,category}=req.body
            if(!name||!price||!description||!image||!category){
                return handleResponse(res,400,null,"field missing")
            }
            console.log(req.user._id)
            
            const menucard=await Menu.create({userID:req.user._id,name,price,description,category,image});
            return handleResponse(res,200,"menucard created successfully",null,menucard)
           
        } catch (error) {
            return res.status(500).json({msg:error})
        
        }
    }
}
module.exports=menuCardController
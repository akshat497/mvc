const User = require("../../modals/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const handleResponse = require("../services/handleResponse");
const Menu = require("../../modals/menuCardModel");

const menuCardController = {
  addMenuCard: async (req, res) => {
    try {
      const { name, price, description, image, category } = req.body;
      if (!name || !price || !description || !image || !category) {
        return handleResponse(res, 400, null, "field missing");
      }
      const menucard = await Menu.create({
        userID: req.user._id,
        name,
        price,
        description,
        category,
        image,
      });
      return handleResponse(
        res,
        200,
        "menucard created successfully",
        null,
        menucard
      );
    } catch (error) {
      return res.status(500).json({ msg: error });
    }
  },
  deleteMenuCard: async (req, res) => {
    try {
      const { _id } = req.body;

      if (!_id) {
        return handleResponse(res, 400, null, "Field '_id' missing");
      }
      const menuCard = await Menu.findOne({ _id:_id ,userID:req.user._id});

      if (!menuCard) {
        return handleResponse(res, 404, null, "Menu card not found");
      }

      await Menu.findByIdAndDelete({ _id: _id ,userID:req.user._id}); // Use menuCardId for deletion

      return handleResponse(res, 200, "Menu card deleted successfully", null);
    } catch (error) {
      return res.status(500).json({ msg: error });
    }
  },
  updateMenuCard:async (req,res)=>{
    try {
        const {_id,image,description,name,price,category}=req.body
        if(!_id){
            return handleResponse(res,404,null,"no id provided",null)
        }
        const obj={
            image:image,
            description:description,
            name:name,
            price:price,
            category:category
        }
        console.log(obj)
        const menu=await Menu.findByIdAndUpdate(_id,{$set:obj})
        return handleResponse(res,200,"updated successfully",null,menu)
    } catch (error) {
        return handleResponse(res,500,null,error,null)
    }
  }
};
module.exports = menuCardController;

const mongoose=require("mongoose")
const postSchema=new  mongoose.Schema({
    userID:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    role:{
        type:String,
     
        default:null
    },
    location:{
        type:String,
        required:true,
    }
})  
const Post= mongoose.model("Post",postSchema);

module.exports= Post
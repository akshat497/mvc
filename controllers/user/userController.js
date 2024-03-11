// const userController={
//     registeruser:async(req,res)=>{
//      res.status(200).json({message:"controller working"})
//     }
// }
// module.exports=userController
const User=require('../../modals/user')
const bcrypt=require( 'bcrypt');
const userController={
    registerUser:async(req,res)=>{
        const { name, email, location, password } = req.body;

        // Check if required fields are missing
        if (!name || !email || !location || !password) {
            return res.status(400).json({ message: "Required fields are missing!" });
        }
        
        try {
            // Create user
            const existingUser=await User.findOne({email});
            if(existingUser){
                return res.status(400).json({message:"User already exists!"})
            }
            const salt =await bcrypt.genSalt(10)
            const encryptedPassword=await bcrypt.hash(password,salt) 
            const encryptedLocation=await bcrypt.hash(location,salt) 
            const user = await User.create({ name, email, password:encryptedPassword, location:encryptedLocation });
            return res.status(201).json({ message: "User created successfully", user });
        } catch (error) {
            // Handle error
            console.error("Error creating user:", error);
            return res.status(500).json({ message: "Internal server error" });
        }
        
    },
    login:async(req,res)=>{
        const {email,password}=req.body;
         const existingUser=await User.findOne({email});
         if(!existingUser){
            return res.status(404).json({message:"Invalid crediancials!"})
         }
         try {
            const passwordIsValid=await bcrypt.compare(password, existingUser.password);
            if(!passwordIsValid){
                return res.status(401).json({message:"Invalid crediancials! "})
            }
            return res.status(200).json({message:"successfull"})
         } catch (error) {
            console.log(error);
            return res.status(500).json({message: 'Server Error!'})
         }


    }

}
module.exports=userController;
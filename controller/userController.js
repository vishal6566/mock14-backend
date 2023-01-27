const User=require("../model/userModel")

const postUser=async(req,res)=>{
    const {name}=req.body
    if(!name){
        res.status(400).json({message:"Please fill in the name",status:"400"})
    }
    const user=await User.create({
        name,
         
         })
        
         if(user){
           const{_id,name}=user
           res.status(201).json({
               _id,name
               })
   
         }else{
           res.status(400).json({message:"Invalid user data",status:"400"})
         
         }
}

module.exports={postUser}
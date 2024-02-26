const { userDetails } = require("../model/userSchema");
const { generateHashPassword, compareHash } = require("../util/bcrypt");
const bcrypt= require("bcrypt");
const { generateAccessToken } = require("../util/jwt");

const signUp = async(req,res)=>{
    try {
        const {name,phoneNumber,password}= req.body;
        console.log(name,password)
        const isPresent = await userDetails.find({name})
        if(isPresent.length>0){
            return res.status(401).json({
                message:"user already exists"
            })

        }
        const hashedPassword = await generateHashPassword(password)
        
        const data = await userDetails.create({
            name,
            phoneNumber,
            password:hashedPassword

        })
        data.save();



        res.status(200).json({
            message:"successfully signed up",
            data:data,
            
        })
    } catch (error) {
        console.log(error)
    }
}


const login = async(req,res)=>{
    const {name,password} = req.body;
    try {
        
        const isExist = await userDetails.findOne({name})
        console.log(isExist,"hello")
        if(!isExist){
            return res.status(401).json({
                message:"user not found"
            })
        }
        console.log(3)

        const validPassword = await bcrypt.compare(password,isExist.password)
        
        
        console.log(validPassword)
    
        if(!validPassword){
            return res.status(401).json({
                message:"userDetails/password not found"
            })
        }

        const accessToken = generateAccessToken(isExist._id);
        const userToken = {
            accessToken
        }
        console.log(8);

        res.status(200).json({
            message:"successfully logged in",
            token:userToken,
            userId:isExist._id
        })


    } catch (error) {
        console.log(error)
        return res.status(401).json({
            message:"error signing in",
            error:error
        })
    }

}
const profile=async(req,res)=>{
    const user = await userDetails.findById(req.userId)
    res.json({
        message:user
    });
}
module.exports = {signUp,login,profile}
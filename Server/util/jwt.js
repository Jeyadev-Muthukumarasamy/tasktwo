const jwt = require("jsonwebtoken")

const generateAccessToken =(userId)=>{
    return jwt.sign({_id:userId},process.env.ACCESSTOKEN)

}

module.exports = { generateAccessToken };

const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name:{
        type:String
    },
    phoneNumber:{
        type:Number
    },
    password:{
        type:String
    }
})

module.exports = {
    userDetails : mongoose.model("userlogs",userSchema)
}

const bcrypt = require("bcrypt");
const SALT = 10;
const generateHashPassword = (password)=>{
    return bcrypt.hash(password,SALT)
}


const compareHash=(password,hashedpassword)=>{
    return bcrypt.compare(password,hashedpassword)
}

module.exports = {
    generateHashPassword,compareHash
}
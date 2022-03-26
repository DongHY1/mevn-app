const jwt = require('jsonwebtoken')
const bctypt = require('bcryptjs')
const registerUser = (req,res)=>{
    res.status(200).json({message:'成功注册用户'});
}
const loginUser = (req,res)=>{
    res.status(200).json({message:'成功注册用户'});
}
const getMe = (req,res)=>{
    res.status(200).json({message:'成功注册用户'});
}
module.exports = {
    registerUser,
    loginUser,
    getMe
}
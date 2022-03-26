const jwt = require('jsonwebtoken')
const bctypt = require('bcryptjs')
const asyncHandler = require("express-async-handler")
const User = require("../models/userModel.js");
const registerUser = asyncHandler(async(req,res)=>{
    const {name,email,password} = req.body
    if(!name || !email ||!password){
        res.status(400)
        throw new Error('请提供姓名、邮箱、密码')
    }
    // 查看用户是否被注册
    const userExists = await User.findOne({email})
    if(userExists){
        res.status(400)
        throw new Error('用户已经注册过了')
    }
    // 对密码进行hash加密
    const salt = await bctypt.genSalt(10)
    const hashedPassword = await bctypt.hash(password,salt)
    // 创建用户
    const user = await User.create({
        name,
        email,
        password:hashedPassword
      });
      if(user){
        //   创建的状态码201    
          res.status(201).json({
             _id:user.id,
             name:user.name,
             email:user.email
          })
      }else{
        res.status(400)
        throw new Error('用户注册失败')
      }
    
})
const loginUser = asyncHandler(async(req,res)=>{
    const {email,password} = req.body
    const user = await User.findOne({email})
    if(user && (await bctypt.compare(password,user.password))){
        res.json({
            _id:user.id,
            name:user.name,
            email:user.email
        })
    }else{
        res.status(400)
        throw new Error('用户登录失败')
    }

    res.status(200).json({message:'成功注册用户'});
})
const getMe = asyncHandler(async(req,res)=>{
    res.status(200).json({message:'成功注册用户'});
})
module.exports = {
    registerUser,
    loginUser,
    getMe
}
const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

const protect = asyncHandler(async (req,res,next)=>{
    // 检查请求头是否传入token
    let token
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try{
            // 拿到token
            token = req.headers.authorization.split(' ')[1]
            // 验证token
            const decoded = jwt.verify(token,process.env.JWT_SECRET)
            // 获取用户
            req.user = await User.findById(decoded.id).select('-password')
            next()
        }catch(err){
            res.status(401)
            throw new Error('未授权')
        }
    }
    if(!token){
        res.status(401)
        throw new Error('未携带token')
    }
})
module.exports = {protect}
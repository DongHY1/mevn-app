const mongoose = require('mongoose')
const userSchema =  mongoose.Schema({
    name:{
        type:String,
        require:[true,'请加入名字']
    },
    email:{
        type:String,
        require:[true,'请加入邮箱'],
        unique:true
    },
    password:{
        type:String,
        require:[true,'请加入密码']
    }
},{
    timestamps:true
})
module.exports = mongoose.model('User',userSchema)
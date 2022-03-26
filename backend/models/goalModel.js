const mongoose = require('mongoose')
const goalSchema =  mongoose.Schema({
    text:{
        type:String,
        require:[true,'请输入文字']
    }
},{
    timestamps:true
})
module.exports = mongoose.model('Goal',goalSchema)
const mongoose = require('mongoose')
const connectDB = async ()=>{
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`数据库已连接${conn.connection.host}`.cyan.underline)
    }catch(err){
        console.log(`数据库连接失败:${err}`.red.underline)
        // 退出当前进程
        process.exit(1)
    }
}
module.exports = connectDB

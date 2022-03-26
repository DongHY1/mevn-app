const mongoose = require('mongoose')
const connectDB = async ()=>{
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`mongoDB is connect ${conn.connection.host}`.cyan.underline)
    }catch(err){
        console.log(`错误:${err}`.red.underline)
        process.exit(1)
    }
}
module.exports = connectDB

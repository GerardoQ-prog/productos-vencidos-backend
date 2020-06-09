const mongoose=require('mongoose')
require('dotenv').config({ path: '.env' });


const connectDB = async () =>{
    await mongoose.connect(process.env.DB_MONGO,{
        useUnifiedTopology: true,
        useNewUrlParser: true})
    console.log('si se ´pudo')
}

module.exports =connectDB
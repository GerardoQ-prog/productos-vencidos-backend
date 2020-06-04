const mongoose=require('mongoose')

const URI='mongodb+srv://dark_gera7:dark_gera7@cluster0-oizwi.mongodb.net/app-productos-vencidos?retryWrites=true&w=majority'

const connectDB = async () =>{
    await mongoose.connect(URI,{
        useUnifiedTopology: true,
        useNewUrlParser: true})
    console.log('si se ´pudo')
}

module.exports =connectDB
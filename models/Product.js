const mongoose =require('mongoose')
const Schema =mongoose.Schema;

const productSchema = new Schema({
    description:{
        type:String,
        required:true
    },
    area:{
        type:String,
        required:true
    },
    date_retirement:{
        type:Date
        
    },
    date_expiration:{
        type:Date
        
        
    }
})

module.exports=mongoose.model('Products',productSchema)
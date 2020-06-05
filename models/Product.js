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
        type:String
        
    },
    date_expiration:{
        type:String 
        
        
    },
    sku:{
        type:Number,
        required:true,
        minlength:2
    }
})

module.exports=mongoose.model('Products',productSchema)
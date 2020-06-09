const mongoose =require('mongoose')
const Schema =mongoose.Schema;

const productSchema = new Schema({
    sku:{
        type:Number,
        required:true,
        minlength:2
    },
    description:{
        type:String,
        required:true
    },
    cantidad:{
        type:Number,
        required:true
    },
    date_expiration:{
        type:String ,
        required:true  
    },
    dias:{
        type:Number,
        required:true
    },
    date_retirement:{
        type:String,
        required:true
        
    },
    area:{
        type:String,
        required:true
    }
   
})

module.exports=mongoose.model('Products',productSchema)
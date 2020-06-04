const Product = require ('../models/Product')

//agrega nuevos productos

exports.newProduct=async (req,res,next)=>{
    const product=new Product(req.body)
    try{
        await product.save()
        res.json({message:'register ok'})
    }catch(error){
        console.log(error)
        next()
    }
}

//muestra productos

exports.viewProducts= async (req,res,next) =>{
    try{
        const products= await Product.find({})
        res.json(products)
    }catch(error){
        console.log(error)
        next()
    }
}
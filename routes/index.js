const express =require('express')
const router =express.Router();

const ProductsController=require('../controllers/ProductsControllers')

module.exports= function(){
 //PRODUCTOS

   //crear nuevo producto
   router.post('/products',ProductsController.newProduct);
   

    //mostrar producto
    router.get('/products',ProductsController
    .viewProducts) 

    return router;
}
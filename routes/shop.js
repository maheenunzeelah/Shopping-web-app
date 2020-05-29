const express=require("express");
const path=require('path');
const rootDir=require('../util/path');
const adminModule=require('./admin')
const router=express.Router();


router.get('/',(req,res,next)=>{
    let products=adminModule.products
    res.render('shop',{
        prod:products,
        pageTitle:'Shop',
        path:'/',
        hasProducts:products.length>0,
      
    })
   
})

module.exports=router;
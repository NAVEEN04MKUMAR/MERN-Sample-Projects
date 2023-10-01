const mongoose=require('mongoose')

const productshema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,'product name must be provided']
    },
    price:{
        type:Number,
        required:[true,'product price must be provided']
    },featured:{
        type:Boolean,
        default:false,
    },rating:{
        type:Number, 
        default:4.5,
    },
    createdAt:{
        type:Date,
        default:Date.now(),
    },
    company:{
        type:String,
        enum:{
            values:['Company A', 'Company B', 'Company C', 'Company D'],
            message:'{VALUE} is not supported',
        },   
    },
})
module.exports=mongoose.model('product',productshema)
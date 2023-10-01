require('dotenv').config()

const connectdb=require('./db/connect')
const product=require('./models/products')

const jsonproducts=require('./products.json')

const start=async()=>{
    try{
        await connectdb(process.env.MONGO_URI)
        await product.deleteMany()
        await  product.create(jsonproducts)
        console.log('Success!!!')
    }catch(error){
        console.log(error)
    }
}
start()
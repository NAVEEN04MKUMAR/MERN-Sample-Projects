//console.log('02 store api');
require('dotenv').config()
require('express-async-errors')

const express=require('express')
const app=express()

const connectdb=require('./db/connect')
const productsrouter=require('./routes/products')

 
const notfoundmiddleware=require('./middleware/notfound')
const errorhandlemiddleware=require('./middleware/error handler')

app.use(express.json())


app.get('/',(req,res)=>{    
    res.send('jobs api')
})

app.use('/api/v1/products',productsrouter)


app.use(notfoundmiddleware)
app.use(errorhandlemiddleware)


const port=process.env.PORT||3000

const start=async()=>{
    try{
    await connectdb(process.env.MONGO_URI)
        app.listen(port,()=>{
            console.log(`server is listening port ${port}...`)});
    }catch(error){ 
        console.log(error);
    }
};

start();
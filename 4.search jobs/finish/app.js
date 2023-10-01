require('dotenv').config()
require('express-async-errors')
const jwt = require('jsonwebtoken');

 const express=require('express')
 const app=express()


const connectdb = require('./db/connect');
//const authenticationmiddleware = require('./middleware/authentication');

//routers
const authrouter=require('./routes/auth')
const jobrouter=require('./routes/jobs')



//error handler
// const notfoundmiddleware=require('./middleware/notfound')
 const errorhandlemiddleware=require('./middleware/error handler')

//app.use(express.static(''))
app.use(express.json())

app.get('/',(req,res)=>{
    res.send('jobs api')
})


//app.use('/api/v1',mainrouter)

app.use('/api/v1/auth',authrouter)
app.use('/api/v1/jobs',jobrouter)

//app.use(notfoundmiddleware)
app.use(errorhandlemiddleware)




const port=process.env.PORT||5000

const start=async()=>{
    try{
        await connectdb(process.env.MONGO_URI)
        app.listen(port,()=>
        console.log(`server is listening on port ${port}...`))
    }catch(error){
        console.log(error)
    }
}
start()
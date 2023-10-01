require('dotenv').config()
require('express-async-errors')

 const express=require('express')
 const app=express()

const mainrouter=require('./routes/main')
 const notfound=require('./middleware/not-found')
 const errorhandlemiddleware=require('./middleware/error-handler')

app.use(express.static('./public'))
app.use(express.json())

app.use('/api/v1',mainrouter)

app.use(notfound)
app.use(errorhandlemiddleware)




const port=process.env.PORT||5000

const start=async()=>{
    try{
        app.listen(port,console.log(`server is listening on port ${port}...`))
    }catch(error){
        console.log(error)
    }
}
start()
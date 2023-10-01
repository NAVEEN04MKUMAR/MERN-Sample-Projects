//console.log('Task Manager App');
const connectdb=require('./db/connect')
const express= require('express')
const app=express();
const tasks=require('./router/task');
require('dotenv').config();
const notfound=require('./middleware/not-found')
const errorhandlemiddleware=require('./middleware/errorhandler')


app.use(express.static('./public'))
app.use(express.json());

//routes
app.get('/hello',(req,res)=>{
    res.send('Task Manager App')
})

app.use('/api/v1/tasks',tasks)
app.use(notfound);
app.use(errorhandlemiddleware);
const port=process.env.PORT||3000;

//const port=3000;

const start=async()=>{
try{ 
    await connectdb(process.env.MONGO_URI)
    app.listen(port,console.log(`server is listening on port ${port}...`))
}catch(error){
    console.log(error)
}
}
start()
//app.listen(port,console.log(`Server is listening on port ${port}`))
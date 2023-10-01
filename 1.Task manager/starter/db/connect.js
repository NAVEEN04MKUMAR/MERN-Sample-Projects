const mongoose=require('mongoose');
const connectionstring='mongodb+srv://taskmanager:taskmanager@cluster0.zrr81ak.mongodb.net/taskmanager';


const connectdb=(url)=>{
return mongoose.connect(connectionstring,{
    usenewurlparser:true,
    //createindex:true,
    //usefindandmodify:false,
    useunifiedtopology:true,
})
}
module.exports=connectdb;
// .then(()=>console.log('connected to db...'))
// .catch((err)=>console.log(err))

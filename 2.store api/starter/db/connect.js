const mongoose=require('mongoose')

const connectdb=(url)=>{
    return mongoose.connect(url,{
        useNewUrlParser:true,
        //useCreateIndex:true,
        //useFindandModify:false,
        useUnifiedTopology:true,
    });
};
module.exports=connectdb;
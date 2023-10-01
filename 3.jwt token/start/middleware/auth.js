const jwt = require('jsonwebtoken');
const {unauthenticatederror}=require('../errors')

const authenticationmiddleware=async(req,res,next)=>{
    //const authheader=req.header.authorization

    const authheader=req.headers.authorization
     if(!authheader||!authheader.startsWith('Bearer')){
        throw   new unauthenticatederror('no token provided',401)
     }
     const token=authheader.split(' ')[1]

    try{
const decoded=jwt.verify(token,process.env.JWT_SECRET)
const {id,username}=decoded;
req.user={id,username}
next()
}catch(error){
    throw new unauthenticatederror('not authorised to access this route',401)
}

}
module.exports=authenticationmiddleware;





 // const {id,username}=decoded;
    // req.user={id,username}
    // next()
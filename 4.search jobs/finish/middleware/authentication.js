const jwt = require('jsonwebtoken');
const {Unauthenticatederror}=require('../errors')

const authenticationmiddleware=async(req,res,next)=>{
    //const authheader=req.header.authorization

    const authheader=req.headers.authorization
     if(!authheader||!authheader.startsWith('Bearer')){
        throw   new Unauthenticatederror('no token provided',401)
     }
     const token=authheader.split(' ')[1]

    try{
const decoded=jwt.verify(token,process.env.JWT_SECRET)
const {id,username}=decoded;
req.user={id,username}
next()
}catch(error){
    throw new Unauthenticatederror('not authorised to access this route',401)
}

}
module.exports=authenticationmiddleware;





 // const {id,username}=decoded;
    // req.user={id,username}
    // next()
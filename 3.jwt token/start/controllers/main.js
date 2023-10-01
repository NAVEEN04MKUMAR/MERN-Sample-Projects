require('dotenv').config();

const jwt = require('jsonwebtoken');
const {BadRequestError}=require('../errors')


const login=async(req,res)=>{
    try{
        const {username,password}=req.body
        console.log(username,password);
       // res.send('fake login/register/signup route')

    if(!username||!password){
        throw new BadRequestError('please provide the email  and password',400)
    }


    const id=new Date().getDate();
   // const jwtSecret = process.env.JWT_SECRET;
    const token=jwt.sign({id,username},process.env.JWT_SECRET,{expiresIn:'1d'});
    res.status(200).json({msg:'user created',token})

    }
    
catch(error){
     console.error(error);
     res.status(error.statusCode||500).json({ error: error.message });
 }   
}


const dashboard=async(req,res)=>{ 
const authheader=req.headers.authorization;
if(!authheader||!authheader.startsWith('Bearer')){
    throw new customapierror('no token proivided',401)
}


console.log('authheader:', authheader);
const tokenArray = authheader.split(' ');
console.log('tokenArray:', tokenArray);
const token1 = tokenArray[1].trim();
console.log('token:', token1);

const token=authheader.split(' ')[1]
    console.log(token);

try{
    const decoded=jwt.verify(token,process.env.JWT_SECRET)
  // console.log(decoded);
console.log('Decoded:', decoded);

    const luckynumber=Math.floor(Math.random()*100)
console.log('Lucky Number:', luckynumber);

    res.status(200).json({msg:`Hello,${decoded.username}`,secret:`Here is Your authorized data, you are lucky number it is ${luckynumber}`})
}

catch(error){
    console.error(' Error',error);
throw new customapierror('no token proivided',401)
}
}   

module.exports={
    login,dashboard
}
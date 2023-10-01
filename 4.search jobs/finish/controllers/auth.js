
const User=require('../models/auth')
const {Statuscodes}=require('http-status-codes')

const register=async(req,res)=>{
    const user=await User.create({...req.body})
   // res.send('registered user')
   res.status(Statuscodes.CREATED).json({user})
}

const login=async(res,req)=>{
    res.send('login user')
}

module.exports={
    register,
    login,
}
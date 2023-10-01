const errorhandlemiddleware=(err,req,res,next)=>{
console.log(err)
return res.status(500).json({msg:'something went wrongpease try again'})
}
module.exports=errorhandlemiddleware;
const {customapierror}=require('../error/custom error') 
const errorhandlemiddleware=(err,req,res,next)=>{

if(err instanceof customapierror){
    return res.status(err.statuscode).json({msg:err.message})
}

//helpful to assign show the error when the value of oname not provider
    return res.status(500).json({msg:`something went wrong try again later`})
}
module.exports=errorhandlemiddleware;
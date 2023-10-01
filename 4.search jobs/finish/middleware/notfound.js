const notfoundmiddleware=(req,res)=>res.status(404).send('Route doe not exist')

module.exports=notfoundmiddleware;
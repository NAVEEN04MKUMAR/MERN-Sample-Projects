

const Customapierror=require('./custom-error')
const {StatusCodes}=require('http-status-codes')

class unauthenticatederror extends Customapierror{
    constructor(message){
        super(message)
    this.statusCode=StatusCodes.UNAUTHORIZED
}
} 
module.exports=unauthenticatederror
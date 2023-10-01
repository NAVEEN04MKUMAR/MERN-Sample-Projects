

const Customapierror=require('./custom api')
const {StatusCodes}=require('http-status-codes')

class Unauthenticatederror extends Customapierror{
    constructor(message){
        super(message)
    this.statusCode=StatusCodes.UNAUTHORIZED
}
} 
module.exports=Unauthenticatederror
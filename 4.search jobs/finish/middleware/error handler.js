
//const { CustomApiError } = require('../errors');
//const { StatusCodes } = require('http-status-codes');

const errorhandlemiddleware = (err, req, res, next) => {
//     if (err instanceof CustomApiError) {
//         return res.status(err.statusCode).json({ msg: err.message });
//     }
//     return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('Something went wrong. Try again later.');
 };
module.exports = errorhandlemiddleware;

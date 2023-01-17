const {verifyToken} = require('../services/tokenService')

module.exports.checkToken = async( req, res, next) =>{
    try{
        const {headers : {authorization}} = req;
        const [, token] = authorization.split(' ');
        const verifyedToken = await verifyToken(token);
        req.verifyedToken = verifyedToken;
        next();
    } catch(err) {
        next(err);
    }
}
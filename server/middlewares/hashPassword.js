const bcrypt = require('bcryptjs');
const CONSTANS = require('../configs/constans')



module.exports.hashPass = async( req, res, next) =>{
    try{
        const {body, body: {password}} = req;
        req.passwordHash = await bcrypt.hash(password, CONSTANS.SALT_ROUND);
        delete body.password;
        next();
    } catch(err) {
        next(err)
    }
};


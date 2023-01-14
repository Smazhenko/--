 const {promisify} = require('util');
 const jwt = require('jsonwebtoken');
 const {EXPIRES_TIME, SECRET} = require('../configs/constans');


 const promisifyJWTSign = promisify(jwt.sign);
const promisifyJWTVerify = promisify(jwt.verify);





module.exports.createToken = async ({userId, email}) => await promisifyJWTSign({userId, email}, SECRET, {
        expiresIn : EXPIRES_TIME
    });

module.exports.verifyToken = async (token) => await promisifyJWTVerify(token, SECRET);

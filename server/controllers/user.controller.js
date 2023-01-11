const { User } = require("../models");
const bcrypt = require('bcryptjs');

module.exports.registrationUser = async (req, res ,next) =>{
    try{
        const {body, passwordHash} = req;
        const createdUser = await User.create({...body, passwordHash});
        return res.status(201).send({data : createdUser});
    } catch(err) {
        next(err)
    }
};

module.exports.loginUser = async (req, res ,next) =>{
    try{
        const {body, passwordHash} = req;
        const foundUser = await User.findOne({
            email: body.email
        });
        if(foundUser) {
            const result = await bcrypt.compare(passwordHash, foundUser.passwordHash);
            res.status(200).send({data: foundUser})
        }
    } catch(err) {
        next(err)
    }
}
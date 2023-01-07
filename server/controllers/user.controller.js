const { User } = require("../models");

module.exports.registrationUser = async (req, res ,next) =>{
    try{
        const {body} = req;
        const createdUser = await User.create(body);
        return res.status(201).send(createdUser);
    } catch(err) {
        next(err)
    }
};

module.exports.loginUser = async (req, res ,next) =>{
    try{

    } catch(err) {
        next(err)
    }
}
const {Task} = require('../models/index')

module.exports.getAllUserTasks = async(req, res, next) =>{
    try{
        const {params: {userId}} = req;
        const userTasks = await Task.find({
            authorId : userId
        })
        res.status(200).send(userTasks);

    } catch(err) {
        next(err)
    }
};


module.exports.createUserTask = async(req, res, next)=>{
    try{
        const {body} = req;
        const task = await Task.create(body);
        res.status(201).send(task);
    } catch(err) {
        next(err);
    }
}
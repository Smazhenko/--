const Router  = require('express');
const router = Router();
const UserRouter = require('./user')
const taskRouter = require('./task')

router.use('/user', UserRouter)

router.use('/task', taskRouter)








module.exports = router; 
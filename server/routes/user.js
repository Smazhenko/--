const Router = require('express');
const UserController = require('../controllers/user.controller');
const {hashPass} = require('../middlewares/hashPassword');
const userRouter = Router();
const {checkToken} = require('../middlewares/checkToken');


userRouter.post('/sign-up', hashPass,  UserController.registrationUser);
userRouter.post('/sign-in',hashPass, UserController.loginUser);
userRouter.get('/', checkToken,  UserController.checkToken);


module.exports = userRouter;
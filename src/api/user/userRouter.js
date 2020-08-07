import express from 'express';
import * as userController from './userController';
// eslint-disable-next-line new-cap
const userRouter = express.Router();

// GET : /user/login
userRouter.post('/login', userController.userLogin);

//  POST : /user/register
userRouter.post('/register', userController.userRegister);

export default userRouter;

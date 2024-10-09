import express from "express";
const router = express.Router();

import *as TasksController from "../app/controllers/TasksController.js";
import *as UsersController from "../app/controllers/UsersController.js";
import AuthMiddleware from "../app/middlewares/AuthMiddleware.js";





//User
router.post ("/Registration", UsersController.Registration)

router.post ("/Login", UsersController.Login)

router.get ("/ProfileDetails", AuthMiddleware,UsersController.ProfileDetails)

router.post ("/ProfileUpdate", AuthMiddleware,UsersController.ProfileUpdate)

router.get ("/EmailVerify/:email" , UsersController.EmailVerify)

router.post ("/CodeVerify" , UsersController.CodeVerify)

router.post ("/ResetPassword" , UsersController.ResetPassword)




//Task

router.post ("/CreateTask" ,AuthMiddleware, TasksController.CreateTask)

router.get ("/UpdateTask/:id/:status",AuthMiddleware,TasksController.UpdateTask)

router.get ("/TasklistbyStatus/:status",AuthMiddleware, TasksController.TasklistbyStatus)

router.post ("/DeleteTask/:id",AuthMiddleware, TasksController.DeleteTask)

router.get ("/CountTask",AuthMiddleware,TasksController.CountTask)


export default router;
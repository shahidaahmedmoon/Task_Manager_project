import express from "express";
const router = express.Router();

import *as TasksController from "../app/controllers/TasksController.js";
import *as UsersController from "../app/controllers/UsersController.js";





//User
router.post ("/Registration", UsersController.Registration)

router.post ("/Login", UsersController.Login)

router.get ("/ProfileDetails", UsersController.ProfileDetails)

router.post ("/ProfileUpdate" , UsersController.ProfileUpdate)

router.post ("/EmailVerify" , UsersController.EmailVerify)

router.post ("/CodeVerify" , UsersController.CodeVerify)

router.post ("/ResetPassword" , UsersController.ResetPassword)




//Task

router.post ("/CreateTask" , TasksController.CreateTask)

router.get ("/UpdateTask" , TasksController.UpdateTask)

router.get ("/TasklistbyStatus" , TasksController.TasklistbyStatus)

router.post ("/DeleteTask" , TasksController.DeleteTask)

router.get ("/CountTask" , TasksController.CountTask)


export default router;
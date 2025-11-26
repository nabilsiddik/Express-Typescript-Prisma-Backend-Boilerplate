import { Router } from "express"
import validateRequest from "../../middlewares/validateRequest"
import { UserValidation } from "./user.validation"
import { UserControllers } from "./user.controllers"

const userRouter = Router()

// Ceate patient route
userRouter.post('/create-user',
     validateRequest(UserValidation.createUserValidationSchema),
     UserControllers.createUser
)

export default userRouter
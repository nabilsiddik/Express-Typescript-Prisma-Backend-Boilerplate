import type { Request, Response } from "express";
import { catchAsync } from "../../errorHelpers/catchAsync";
import { UserServices } from "./user.services";
import { sendResponse } from "../../utils/userResponse";

// Create user
const createUser = catchAsync(async (req: Request, res: Response) => {
  const result = await UserServices.createUser(req);

  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: 'Patient Account Created Successfully',
    data: result
  })
})

export const UserControllers = {
    createUser
}
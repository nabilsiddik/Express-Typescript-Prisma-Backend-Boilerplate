import type { Request } from "express"
import { prisma } from "../../config/prisma.config"
import AppError from "../../errorHelpers/appError"
import { StatusCodes } from "http-status-codes"
import bcrypt from "bcryptjs"
import { envVars } from "../../config/env.config"

// Create user
const createUser = async (req: Request) => {
    const { name, email, password, role, contactNumber, profilePhoto, address } = req.body

    // if (req?.file) {
    //     const uploadedResult = await fileUploader.uploadToCloudinary(req.file)
    //     req.body.patient.profilePhoto = uploadedResult?.secure_url
    // }

    const existingUser = await prisma.user.findUnique({
        where: { email }
    })

    if (existingUser) {
        throw new AppError(StatusCodes.BAD_REQUEST, 'An account with this email already exist.')
    }

    const hashedPassword = await bcrypt.hash(password, Number(envVars.SALT_ROUND))

    const createdUser = await prisma.user.create({
        data: {
            name,
            email,
            password: hashedPassword,
            role: role || 'USER',
            address: address || '',
            profilePhoto: profilePhoto || '',
            contactNumber: contactNumber || ''
        }
    })

    const {password: userPassword, ...rest} = createdUser

    return rest
}


export const UserServices = {
    createUser
}
import z from 'zod'

// patient creation input zod schema
const createUserValidationSchema = z.object({
    name: z.string('Name is required'),
    email: z.string('Email is required'),
    password: z.string('Password is required').min(6, 'Password must me at least 6 character long'),
    address: z.string().optional(),
    contactNumber: z.string().optional(),
    profilePhoto: z.string().optional(),
    gender: z.enum(['MALE', 'FEMALE', 'OTHERS'], {
        error: 'Incorrect Gender'
    }),
    role: z.enum(['SUPER_ADMIN', 'ADMIN', 'USER'])
})


export const UserValidation = {
    createUserValidationSchema
}

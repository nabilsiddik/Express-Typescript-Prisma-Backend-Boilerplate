// Enums
export enum UserRole {
    SUPER_ADMIN,
    ADMIN,
    USER
}

export enum UserStatus {
    ACTIVE,
    BLOCKED,
    DELETED
}

export enum Gender {
    MALE,
    FEMALE,
    OTHERS
}

// Interfaces
export type createPatientInput = {
    name: string
    email: string
    password: string
    contactNumber?: string
    address?: string
    gender?: Gender
    profilePhoto: String
    role: UserRole
}
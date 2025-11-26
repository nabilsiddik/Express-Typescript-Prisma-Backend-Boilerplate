import { Router } from "express";

export const router = Router()

const moduleRoutes = [
    {
        path: '/user',
        route: userRouter
    }
]


moduleRoutes.forEach((route) => {
    router.use(route.path, route.route)
})

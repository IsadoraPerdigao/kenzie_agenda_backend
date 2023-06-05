import { Request, Response, NextFunction } from "express"
import jwt from "jsonwebtoken"
import "dotenv/config"


const ensureAuthMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization

    if (!token) {
        console.log("1", req.headers)
        console.log(req.body)
        return res.status(401).json({
            message: "invalid token"
        })
    }

    const splitToken = token.split(" ")[1]

    jwt.verify(splitToken, process.env.SECRET_KEY!, (error: any, decoded: any) => {
        if (error) {
            console.log("2", token)
            return res.status(401).json({
                message: "invalid token"
            })
        }

        res.locals.userId = decoded.sub

        console.log("decoded", decoded)

        return next()
    })
}

export { ensureAuthMiddleware }
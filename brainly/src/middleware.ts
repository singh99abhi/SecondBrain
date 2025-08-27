import { Request,NextFunction,Response } from "express";
import  Jwt  from "jsonwebtoken";
import { Jwt_password } from "./config";

export const userMiddleware=(req:Request,res:Response,next:NextFunction)=>{
    
    const header=req.headers["authorization"]
    const decoded=Jwt.verify(header as string,Jwt_password)

    if (decoded){
        //@ts-ignore
        req.userId=decoded.id
        next()
    }else{
        res.status(403).json({
            message:"you are not logged in"
        })
    }


}
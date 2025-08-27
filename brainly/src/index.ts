import express from "express"
import mongoose from "mongoose"
import jwt from "jsonwebtoken"
import { ContentModel, LinkModel, UserModel } from "./db"
import { Jwt_password } from "./config"
import { userMiddleware } from "./middleware"
import { random } from "./utils"
import cors from "cors"
const app=express()
app.use(express.json())
app.use(cors())

app.post("/api/v1/signup",async (req,res)=>{
    const username=req.body.username
    const password=req.body.password

    try{
        await UserModel.create({
            username:username,
            password:password
        })  
        res.json({
            message:"User Signed UP"
        })
      

    }catch(e){
            res.status(411).json({
                message:"user exists"
            })
    }
    
})

app.post("/api/v1/signin",async (req,res)=>{
    const username=req.body.username
    const password=req.body.password

     const existingUser=await UserModel.findOne({
        username:username,
        password:password
    })
    if(existingUser){
        const token=jwt.sign({
            id:existingUser._id
        },Jwt_password)
        res.json({
            token
        })
    }else{
        res.status(403).json({
            message:"incorrect credentaials"
        })
    }
    
})

app.post("/api/v1/content",userMiddleware,async(req,res)=>{
        const link=req.body.link
        const type=req.body.type
        const title=req.body.title
        await ContentModel.create({
            link,
            type,
            //@ts-ignore
            userId:req.userId,
            tags:[]  ,
            title   
        })
    res.json({
        message:"content added"
    })

})

app.get("/api/v1/content",userMiddleware,async (req,res)=>{
    //@ts-ignore
    const userId=req.userId
    const content=await ContentModel.find({
        userId:userId
    }).populate("userId","username")
    res.json({
        content
    })
    
})

app.delete("/api/v1/content",userMiddleware,(req,res)=>{
    const contentId=req.body.contentId
    ContentModel.deleteMany({
        contentId,
        //@ts-ignore
        userId:req.userId
    })
    res.json({
        message:"deleted"
    })
    
})

app.post("/api/v1/brain/share",userMiddleware,async (req,res)=>{
    const share=req.body.share
    
    if(share){
        const hash=random(10)
        const exsitinglink=await   LinkModel.findOne({
             //@ts-ignore

            userId:req.userId
        })
        if(exsitinglink){
            res.json({
                hash:exsitinglink.hash
            })
        }
        
        await LinkModel.create({
            //@ts-ignore
            userId:req.userId,
            hash:hash

        })
        res.json({
            message:"/share"+hash
        })
    }else{
       await LinkModel.deleteOne({
        //@ts-ignore
                userId:req.userId
        })
        res.json({
            message:"requesting removed shareable link "
        })
    }
    


})

app.post("/api/v1/brain/:shareLink",async (req,res)=>{
    const hash =req.params.shareLink


    const Link = await LinkModel.findOne({
        hash
    })
    if (!Link){
        res.status(411).json({
                message:"   Sorry the inputs are incorrect"
        })
        return
    }
    const content= await ContentModel.find({
        userId:Link.userId
    })

    const user=     await UserModel.findOne({
        _id:Link.userId
    })

    if (!user){
        res.status(411).json({
                message:"   Ideally this should not happen"
        })
        return
    }

    res.json({
        username:user.username,
        content:content

    })
})

app.listen(3000)


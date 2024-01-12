const express = require("express")
const app = express()
const fs = require("fs")
import { NextFunction, Request, Response, response } from 'express';
import { any } from 'joi';
import { Callback } from 'mongoose';
import path from 'path';
const nodeMailer  = require("nodemailer")
const cookieParser = require("cookie-parser")
const cors = require("cors")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const token  = require("token")
  const multer = require("multer")
  const sharp = require("sharp")
  const Joi = require("joi")
const content= "sadiq"
const PostalMode = require("../models/PostalMode")
const AuthenticationModel = require("../models/AuthenticationModel")
const CommentsModel  =require("../models/CommentsModel")
const mongoose = require("mongoose")
fs.writeFile("data.txt", content, (err: any) => {
    if(err){
throw new Error
    }
    else{
        console.log("created")
    }

})
app.use(cors({
    origin: ["http://localhost:5174"],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}))

mongoose.connect("mongodb://127.0.0.1:27017/Food", {
    useNewUrlParser:true,
      useUnifiedTopology: true
})
const bodyParser = require("body-parser")

app.use(cookieParser())
app.use(express.json())

app.use(bodyParser.json())




const transporter = nodeMailer.createTransport({
    service: "gmail",
    auth: {
        user: "sadiqcafarli2020@gmail.com",
        pass: "ubvlghdljzsfghlw"
    }
})


   
app.post("/sendEmail", (req:Request, res:Response) => {
    const {email} = req.body
    if(!email){
        return res.status(400).json({err: "error"})
    }
    const mailOptions = {
        to: "sadiqcafarlidret@gmail.com",
        subject: "New Message",
        text: ` email: ${email}\n `
    }
    transporter.sendMail(mailOptions, (err: any, response: Response) => {
        if(err){
            console.log(err)
        }
        else{
            return res.json({message: "success"})
        }
    })
})

// contact sended

app.post("/sendMessage", (req:Request, res:Response) => {
    const {name, email, phone, message}  = req.body
  const mailOptions = {
    to: "sadiqcafarlidret@gmail.com",
    subject: "New Message",
    text: ` name: ${name}\n email: ${email}\n phone: ${phone}\n message: ${message}\n `
  }
  transporter.sendMail(mailOptions, (err: any, response: Response) => {
    if(err){
        console.log(err)
    }
    else{
        return res.json({message: "success"})
    }
  }) 
})

app.post("/sendPostal", async (req: Request, res:Response) => {
    const {state, city, zip} = req.body
    try {
        const NewPostalCode = await new PostalMode({
            state,
            city,
            zip
        })    
        const savedPostal = await NewPostalCode.save()
        res.status(201).json(savedPostal)
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "error"})
    }

})

app.get("/getPostal", async (req: Request, res:Response) => {
    try {
        const postal = await PostalMode.find()
        res.status(200).json(postal)
    } catch (error) {
        console.log(error)
    }
})
// register hahhhahahaha


const storage = multer.diskStorage({
    destination: (req:Request,file: any,cb: Callback) => {
        cb(null, 'Public')
    },
    filename:(req:Request, file:any, cb:Callback) => {
        cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname))
    }

})

const registerSchema = Joi.object({
    name:Joi.string().min(6).required(),
    email:Joi.string().email().required(),
    password: Joi.string().min(8).required,
    file: Joi.string()
})

const upload = multer({
    storage: storage
})



interface CustomRequest extends Request {
    file: {
        filename: string;
    };
} 
 
app.post("/register" ,  upload.single("file"), async (req:CustomRequest, res:Response) => {
    try {
      
        const {error} = registerSchema.validate()
        if(error){
            throw new Error
        }  
        const {name, email, password, } = req.body
        const file = req.file
        const hash = await bcrypt.hash(password, 10)
        const user = new AuthenticationModel({
            name,
            email, 
            password: hash,
            file: file.filename
        }) 
        await user.save() 
        res.json({message: "success"})
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Internal Server Error" });
    } 
})

app.post("/login", async (req:Request, res:Response) => {
try {
    const {email,password} = req.body
    const user  = await  AuthenticationModel.findOne({email:email})
    if(user){
        const validPassword = await bcrypt.compare(password, user.password)

        if(validPassword){
            const token =  jwt.sign({email: user.email, username: user.username}, "313313", {expiresIn: "2d"} )
             res.cookie("token", token)
             return res.json("success")
        }
        else{
            res.status(500).json({message: "error"})
        }
       
    }

} catch (error) {
    console.log(error)
    return res.status(500).json({ message: "Internal Server Error" });
}
})

interface  Decodedtoken {
    name: string,
    email: string,
    file: any
}
declare global {
    namespace Express {
        interface Request {
           
            name?: string;
            email?: string,
            file?:any
        }
    }
}





const verifyUser = (req: Request, res:Response, next:NextFunction) => {
    const token = req.cookies.token
    if(!token){
        return res.json("token missing")
    }
    else{
        jwt.verify(token, "313313", (err: Error ,decoded:Decodedtoken) => {
            if(err){
                return res.json("error")
            }
            else{
                req.name = decoded.name
                req.email= decoded.email;
                req.file = decoded.file
                next()
            }
        })
    }
}

app.get("/", verifyUser, (req: Request, res:Response) => {
    return res.json({name:req.name, email:req.email, file:req.file})
})

app.get("/logout", (req:Request, res:Response) => {
    res.clearCookie('token')
    return res.json('success')
})

// Blogs Api are preparing


interface blogItems  {
    id:number,
    url: string,
    title :string,
}
const blogs:blogItems[] = [
    {
        id: 1,
        url: "https://res.cloudinary.com/dgmkqlvme/image/upload/v1704699205/blog_uuqsad.jpg",
        title: "Enjoy Your Life With Healthy Body"
    },
    {
        id: 2,
        url: "https://res.cloudinary.com/dgmkqlvme/image/upload/v1704699205/post2_aaap17.jpg",
        title: "Reason Why You Should Choose Organic"
    },
    {
        id: 3,
        url: "https://res.cloudinary.com/dgmkqlvme/image/upload/v1704699205/post3_s3jeey.jpg",
        title: "Fair Show Fruit Of All Regions Of The Country"
    }
]

app.get("/blogs", (req:Request, res:Response) => {
    return res.status(200).json(blogs)
})

interface BlogId {
    id:number
}



app.post("/blogs/:blogId", verifyUser, async (req:Request, res:Response) => {
  try {
    const {name,content} = req.body
    const blogId = parseInt(req.params.id)
    

    const newComments = await new CommentsModel({
        name,
        content,
      blogId
    })

    const savedComments  = await newComments.save()
    return res.status(200).json(savedComments)
  } catch (error) {
    console.log(error)
  }
})
 
app.get("/blogs/getComments", async (req:Request, res:Response) => {
    try {
        const blogId = req.query.id
        const comments = await CommentsModel.find({blogId}).sort("-date")
        return res.status(200).json(comments)    
    } catch (error) {
        console.log(error)
        return res.status(500).json({message: "error"})
    }
})
  

app.get("/blogs/:id", async (req:Request, res:Response) => {
    try {
       const  id:number = parseInt(req.params.id)
       const item:BlogId |undefined = blogs.find((item) =>item.id === id)
 if(item){
    return res.status(200).json(item)
 }
 else{
    return res.status(500).json({message: "error"})
 }
    } catch (error) {
        console.log(error)
    }
})


 
// shop

interface shopItem {
    id:number,
    url: string,
    name: string,
    price: string,
    category: any
}

const shops:shopItem[] = [
    {
        id: 1,
        url: "https://res.cloudinary.com/dgmkqlvme/image/upload/v1704732958/product1_ck6fzy.jpg",
             name: "Apple",
             category: "Fruit",
             price: "$30.00 - $46.00"
    },
    {
        id: 2,
        url: "https://res.cloudinary.com/dgmkqlvme/image/upload/v1704364675/banana_f4n6gl.jpg",
        name: "Banana",
        price: "$20.30",
        category: "Fruit"
    },
    {
        id: 3,
        price: "$70.00",
        url: "https://res.cloudinary.com/dgmkqlvme/image/upload/v1704733103/product2_hdsjzi.jpg",
        name: "PineApple",
        category: "juice",
    },
    {
        id: 4,
        url: "https://res.cloudinary.com/dgmkqlvme/image/upload/v1704388549/chili_dlxxpo.jpg",
        name: "Chili",
        price: "$13.00",
        category: "Fruit"
    },
    {
        id: 5,
        url: "https://res.cloudinary.com/dgmkqlvme/image/upload/v1704368234/cucumber_aur96t.jpg",
        category: "Vegetable",
        name: "Cucumber",
        price: "$287.00"
    },
    {
        id: 6,
        url: "https://res.cloudinary.com/dgmkqlvme/image/upload/v1704364375/wallnut_so8v7u.jpg",
          name: "Cucumis melo",
          category: "Beans",
          price: "$150.00"
    },
    {
        id: 7,
        url:"https://res.cloudinary.com/dgmkqlvme/image/upload/v1704363697/product3_tgby0a.jpg",
        name: "Cabbage",
        category: "Vegetable",
        price: "$10.99"
    },
    {
        id: 8,
        url: "https://res.cloudinary.com/dgmkqlvme/image/upload/v1704363038/product1_dfqqb7.jpg",
        name: "Strawberry",
        category: "Fruit",
        price: "$12.99"
    }
]

app.get("/getShop", (req: Request, res: Response) => {
    return res.status(200).json(shops)
})
 

   
app.listen(3001, () => {
    console.log("Server is running on port 3001")
})

import express from 'express';
import dotenv from 'dotenv'
// import { posts } from './posts.js';
import productRoutes from './routes/productsRoute.js';

const app = express();
dotenv.config();



app.get('/',(req,res)=>{
    res.status(200).send('welcome to back-End')
})

app.use('/posts',productRoutes)
app.use('/comments',productRoutes)
app.use('/albums',productRoutes)
app.use('/photos',productRoutes)
app.use('/todos',productRoutes)
app.use('/users',productRoutes)

// app.get('/profile',(req,res)=>{
//     res.status(200).send("welcome to my profile")
// })

// app.get('/users/:id',(req,res)=>{
//     const id = req.params.id
//     res.status(200).send(`welcome to ${id}`)
// })

// app.get('/posts',(req,res)=>{
//     res.status(200).send({status:200,message:'you are logIn',data:posts})
// })



app.get('*',(req,res)=>{
    res.status(404).send('Page not found')
})



const PORT = 9368
app.listen(PORT,()=>{
    console.log(`server is starting ${PORT}`);
})
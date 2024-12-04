import express from 'express';
import { posts } from '../All Data/posts.js';
import { comments } from '../All Data/comments.js';
import { albums } from '../All Data/albums.js';
import { photos } from '../All Data/photos.js';
import { todos } from '../All Data/todos.js';
import { users } from '../All Data/users.js';

const productRoutes = express.Router();

productRoutes.get('/',(req,res)=>{
    res.status(200).send({status:200,message:"success",data:posts})
})

productRoutes.get('/:id',(req,res)=>{
    const id = req.params.id
    res.status(200).send({status:200,message:"success",data:id})
})

productRoutes.get('/comments',(req,res)=>{
    res.status(200).send({status:200,message:"success",data:comments})
})

productRoutes.get('/albums',(req,res)=>{
    res.status(200).send({status:200,message:"success",data:albums})
})

productRoutes.get('/photos',(req,res)=>{
    res.status(200).send({status:200,message:"success",data:photos})
})
productRoutes.get('/todos',(req,res)=>{
    res.status(200).send({status:200,message:"success",data:todos})
})
productRoutes.get('/users',(req,res)=>{
    res.status(200).send({status:200,message:"success",data:users})
})




export default productRoutes
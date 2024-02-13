import {Router} from 'express'
import { getUsers } from '../controllers/users.controller.js'
import { PrismaClient } from '@prisma/client'

const router =Router()
const prisma=new PrismaClient()

router.get('/users',async (req,res)=>{
    const users= await getUsers()//uso el metodo del controlador
        res.send(users)//devuelvo la lista de users
    }) 


export default router
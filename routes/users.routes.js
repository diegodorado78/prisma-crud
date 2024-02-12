import {Router} from 'express'
import { getUsers } from '../controllers/users.api.js'
import { PrismaClient } from '@prisma/client'

const router =Router()
const prisma=new PrismaClient()

router.get('/users',async (req,res)=>{
    const users= await getUsers()
    console.log(users);
        res.send(users)
    }) 


export default router
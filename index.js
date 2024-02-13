import express from 'express'
import usersRoutes from "./routes/users.routes.js";
import { PrismaClient } from '@prisma/client';
const app =express()
const prisma=new PrismaClient()

async function main(){
    app.use(express.json())
    app.use('/api',usersRoutes)
    app.listen(3000)
   
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
console.log("server on port",3000);
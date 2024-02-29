import { Request, Response } from 'express';
import { PrismaClient } from "@prisma/client"
import { IdParamSchema } from '../validations';


const prisma = new PrismaClient()

// Get all users
export const getUsers = async (req: Request, res: Response) => {
    try {
        const users = await prisma.user.findMany();
        return res.send(users)
    } catch (error) {
        console.error('Error getting users:', error);
    }
};


// Get  user id
export const getUserById = async (req: Request, res: Response) => {

    const { id } = req.params
    try {
        const validation = IdParamSchema.parse(req.params)
        console.log(validation);
        const user = await prisma.user.findUnique({ where: { id: parseInt(id) } });
        if (user) res.send(user);
        else return res.status(400).send({ message: 'User not found' });
    } catch (e) {
        console.log(e);

        const user = await prisma.user.findUnique({ where: { id: parseInt(id) } });
        if (user) return res.send(user);

        //return res.status(400).send((e as Error).message);
    }
};

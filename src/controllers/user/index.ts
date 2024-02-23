import { Request, Response } from 'express';
import { PrismaClient } from "@prisma/client"
import { Id } from './user';
import { IdParamSchema } from '../validations';
import { log } from 'console';

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
    console.log(req.params);
    const { id } = req.params
    // const id = IdParamSchema.parse(req.params);
    console.log(typeof (id))

    try {
        const user = await prisma.user.findUnique({ where: { id: parseInt(id) } });
        if (user) res.send(user);
        else return res.status(400).send({ message: 'User not found' });
    } catch (e) {
        return res.status(400).send((e as Error).message);
    }
};

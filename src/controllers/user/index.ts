import { Request, Response } from 'express';
import { PrismaClient } from "@prisma/client"
import { IdParamSchema } from '../validations';


const prisma = new PrismaClient()
// Create user
export const createUser = async (req: Request, res: Response) => {

    try {
        console.log(req.body);

        const newUser = await prisma.user.create({
            data: req.body
        })
        !newUser && res.status(400).send({ message: 'Users not found' });
        return res.json(newUser)
    } catch (error) {
        console.error('Error getting users:', error);
    }
};

// Get all users
export const getUsers = async (req: Request, res: Response) => {
    try {
        const users = await prisma.user.findMany();
        !users && res.status(400).send({ message: 'Users not found' });
        return res.json(users)
    } catch (error) {
        console.error('Error getting users:', error);
    }
};


// Get  user by id
export const getUserById = async (req: Request, res: Response) => {
    const { id } = req.params
    try {
        const validation = IdParamSchema.safeParse(req.params)
        console.log(validation.success);
        const user = await prisma.user.findUnique({ where: { id: parseInt(id) } });
        !user && res.status(400).send({ message: 'User not found' });
        return res.json(user);
    } catch (e) {
        return res.status(400).send((e as Error).message);
    }
};

// Delete  user by id
export const deleteUserById = async (req: Request, res: Response) => {
    const { id } = req.params
    try {
        const validation = IdParamSchema.safeParse(req.params)
        console.log(validation.success);
        const userDeleted = await prisma.user.delete({ where: { id: parseInt(id) } });
        console.log(userDeleted);

        !userDeleted && res.status(400).send({ message: 'User to delete not found' });
        return res.json(userDeleted);
    } catch (e) {
        return res.status(400).send((e as Error).message);
    }
};
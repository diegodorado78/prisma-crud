import { Router } from 'express'
import { deleteUserById, getUserById, getUsers } from '../controllers/user'

const router = Router()

router.get('/users', getUsers)

router.get('/users/id/:id', getUserById);

router.delete('/users/id/:id', deleteUserById);


export default router
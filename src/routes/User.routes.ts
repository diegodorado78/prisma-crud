import { Router } from 'express'
import { getUserById, getUsers } from '../controllers/user'
import { IdParamSchema } from '../controllers/validations';

const router = Router()

router.get('/users', getUsers)

router.get('/users/id/:id', getUserById);


export default router
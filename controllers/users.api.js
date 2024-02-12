import { PrismaClient } from "@prisma/client"

const prisma =new PrismaClient

const getUsers = async (req, res) => {
    try {
      const users = await prisma.user.findMany();
      return users
      //res.status(200).json(users);
    } catch (error) {
     // console.error('Error getting users:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };

  export {getUsers}

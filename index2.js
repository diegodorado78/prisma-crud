const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main() {
  
  console.log("Deleted: ", deletedUser);
    const allUsers = await prisma.user.findMany({
      include: {
        posts: true,
        profile: true,
      },
    })
    console.dir(allUsers, { depth: null })

    // await prisma.user.create({
    //   data: {
    //     name: 'Fernando',
    //     email: 'fernando@cca.io',
    //     age:23,
    //     posts: {
    //       create: { title: 'hola world', },
    //     },  profile: {
    //       create: { bio: 'I like tortugas' },
    //     },
    //   },
    // })
  } 
  const deletedUser = await prisma.user.delete({
    where: { id: 12 },
  });
  
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
(async () => {
  await prisma.$connect();
  const result = await prisma.user.create({
    data: { email: 'sancho@mhand.net', name: 'sanggyun', role: 'USER' },
  });
  console.log(result);

  prisma.$disconnect();
})();

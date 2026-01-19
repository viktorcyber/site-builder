import argon2 from 'argon2';

import prisma from '@/libs/client.js';
import logger from '@/middlewares/logger.js';

async function main() {
  await prisma.user.create({
    data: {
      email: 'admin@gmail.com',
      role: 'ADMIN',
      password: await argon2.hash('123'),
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    logger.error(e);
    await prisma.$disconnect();
    process.exit(1);
  })
  .finally(async () => await prisma.$disconnect());

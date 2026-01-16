import prisma from '@/config/prisma.js';

/* Connecting to the database before each test. */
beforeEach(async () => {
  await prisma.$connect();
});

/* Closing database connection after each test. */
afterEach(async () => {
  await prisma.$disconnect();
});

import { PrismaClient } from '@prisma/client';

import config from './index.js';

declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

const prisma = global.prisma || new PrismaClient();

if (config.nodeEnv !== 'production') global.prisma = prisma;

export default prisma;

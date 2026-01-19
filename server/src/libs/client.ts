import { PrismaClient } from '@prisma/client';
import { Database, Resource } from '@adminjs/prisma';
import AdminJS from 'adminjs';

import config from '@/config/env.js';

declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

const prisma = global.prisma || new PrismaClient();

if (config.nodeEnv !== 'production') global.prisma = prisma;

AdminJS.registerAdapter({ Database, Resource });

export const initializeDb = async () => ({ prisma });

export default prisma;

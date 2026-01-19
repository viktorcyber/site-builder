import swaggerJsdoc from 'swagger-jsdoc';

import config from '@/config/env.js';
import { serverOptions } from '@/utils/constants.js';

const options = {
  definition: {
    openapi: '3.0.0',
    info: serverOptions,
    tags: [
      {
        name: 'users',
        description: 'Endpoints for managing and retrieving users.',
      },
    ],
    servers: [
      {
        url: config.serverHost,
      },
    ],
  },
  apis: ['./src/routes/*.route.ts'],
};

export default swaggerJsdoc(options);

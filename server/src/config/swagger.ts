import swaggerJsdoc from 'swagger-jsdoc';

import config from '@/config/index.js';
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
        url: `http://localhost:${config.PORT}`,
      },
    ],
  },
  apis: ['./src/routes/*.route.ts'],
};

export default swaggerJsdoc(options);

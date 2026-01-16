import { AdminJSOptions } from 'adminjs';
import argon2 from 'argon2';
import { getModelByName } from '@adminjs/prisma';
import passwordsFeature from '@adminjs/passwords';

import componentLoader from './components.js';

import { application } from '@/utils/constants.js';

const baseNavigation = {
  name: 'Management',
};

const options: AdminJSOptions = {
  componentLoader,
  rootPath: '/admin',
  resources: [
    {
      resource: { model: getModelByName('User'), client: prisma },
      options: {
        properties: { password: { isVisible: false } },
        navigation: baseNavigation,
        listProperties: ['id', 'email', 'name'],
      },
      features: [
        passwordsFeature({
          properties: {
            encryptedPassword: 'password',
            password: 'newPassword',
          },
          hash: argon2.hash,
          componentLoader,
        }),
      ],
    },
  ],
  branding: {
    companyName: `Administrator | ${application}`,
    favicon: '/favicon.svg',
  },
};

export default options;

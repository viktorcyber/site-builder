import AdminJS from 'adminjs';
import AdminJSExpress from '@adminjs/express';
import Connect from 'connect-pg-simple';
import session from 'express-session';

import authenticate from './authenticate.js';
import adminOptions from './options.js';

import config from '@/config/index.js';

export const admin = new AdminJS(adminOptions);

if (config.nodeEnv === 'production') {
  await admin.initialize();
} else {
  admin.watch();
}

const ConnectSession = Connect(session);
const sessionStore = new ConnectSession({
  conObject: {
    connectionString: config.dataUrl,
    ssl: config.nodeEnv === 'production',
  },
  tableName: 'session',
  createTableIfMissing: true,
});

export const adminRouter = AdminJSExpress.buildAuthenticatedRouter(
  admin,
  {
    authenticate,
    cookieName: 'adminjs',
    cookiePassword: config.secretKey,
  },
  null,
  {
    store: sessionStore,
    resave: true,
    saveUninitialized: true,
    name: 'adminjs',
    secret: config.secretKey,
    cookie: {
      httpOnly: config.nodeEnv === 'production',
      secure: config.nodeEnv === 'production',
    },
  }
);

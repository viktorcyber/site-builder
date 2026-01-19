import path from 'path';

import express, { Application, NextFunction, Request, Response } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import helmet from 'helmet';
import swaggerUi from 'swagger-ui-express';
import {
  clerkMiddleware,
  clerkClient,
  requireAuth,
  getAuth,
} from '@clerk/express';
import { serve } from 'inngest/express';

import { inngest, functions } from '@/libs/inngest.js';
import config from '@/config/env.js';
import { initializeDb } from '@/libs/client.js';
import { admin, adminRouter } from '@/admin/index.js';
import { serverOptions } from '@/utils/constants.js';
import router from '@/routes/index.js';
import swaggerDocs from '@/libs/swagger.js';

const app: Application = express();

await initializeDb();

const corsOptions = {
  origin: config.allowHost,
  credentials: true,
};

// Middlewares
app.use(clerkMiddleware());
app.use(express.static(path.join(process.cwd(), 'public')));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors(corsOptions));
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        'script-src': ["'self'", "'unsafe-inline'", "'unsafe-eval'"],
        'img-src': ["'self'", 'data:', 'https:'],
      },
    },
  })
);

if (config.nodeEnv === 'production') {
  app.use(
    morgan('combined', {
      skip(req: Request, res: Response) {
        return res.statusCode < 400;
      },
    })
  );
} else {
  app.use(morgan('dev'));
}

// Routes
app.use(admin.options.rootPath, adminRouter);
app.use(router);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use('/inngest', serve({ client: inngest, functions }));

app.get('/', (req: Request, res: Response) => {
  res.json(serverOptions);
});

app.use((req: Request, res: Response) => {
  res.status(404).json({ message: 'Route not found' });
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

export default app;

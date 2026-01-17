import path from 'path';

import express, { Application, Request, Response } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import helmet from 'helmet';
import swaggerUi from 'swagger-ui-express';
import { clerkMiddleware, clerkClient, requireAuth, getAuth } from '@clerk/express';
import { serve } from "inngest/express"

import { inngest, functions } from "@/config/inngest.js"
import config from '@/config/index.js';
import initializeDb from '@/db/index.js';
import { admin, adminRouter } from '@/admin/index.js';
import { serverOptions } from '@/utils/constants.js';
import router from '@/routes/index.js';
import swaggerDocs from '@/config/swagger.js';
import errorMiddleware from '@/middlewares/error.middleware.js';

const app: Application = express();

await initializeDb();

const corsOptions = {
  origin: config.allowHost,
  credentials: true,
};

app.use(clerkMiddleware())
app.use(express.static(path.join(process.cwd(), 'public')));
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
app.use(admin.options.rootPath, adminRouter);
app.use(router);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use(errorMiddleware);
app.use("/inngest", serve({ client: inngest, functions }));

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

app.get('/', (req: Request, res: Response) => {
  res.json(serverOptions);
});

export default app;

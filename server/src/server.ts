import app from '@/app.js';
import config from '@/config/index.js';
import { admin } from '@/admin/index.js';
import logger from '@/config/logger.js';

const start = async () => {
  app.listen(config.PORT, () => {
    logger.info(`Server running at http://localhost:${config.PORT}`);
  });
  logger.info(`Swagger docs available at http://localhost:${config.PORT}/docs`);
  logger.info(
    `AdminJS started on http://localhost:${config.PORT}${admin.options.rootPath}`
  );
};

start();

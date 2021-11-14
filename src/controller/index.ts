import cors from 'cors';
import express from 'express';
import { getLogger } from 'log4js';
import { init as initController } from '../controller/controller';
import { properties } from '../resources/properties';

export function init() {
  getLogger().info(`initializing controller...`);
  if (!process.env.USER_INTERFACE_PATH) {
    getLogger().error(`environment variable USER_INTERFACE_PATH not found.`);
  }
  const app = express();
  setupPreRequestMiddleware(app);
  setupHealthCheck(app);
  initController(app);
  app.listen(properties.serverPort, () =>
    getLogger().info(`listening on ${properties.serverPort}`)
  );
}
function setupPreRequestMiddleware(app: express.Application) {
  app.use(cors({ origin: process.env.USER_INTERFACE_PATH }));
  app.use((req, res, next) => {
    if (!req.url.match(/^\/docs\/?/)) {
      const logger = getLogger();
      logger.addContext('http_client_ip_address', req.ip);
      Object.entries(req.headers).forEach(([key, value]) =>
        logger.addContext(`http_request_header_${key}`, value)
      );
      logger.info(`Received request to ${req.url}`);
    }
    next();
  });
}
function setupHealthCheck(app: express.Application) {
  app.get('/healthcheck', (_req, res) => {
    const healthcheck = {
      uptime: process.uptime(),
      message: 'OK',
      timestamp: Date.now(),
    };
    try {
      res.send(healthcheck);
    } catch (e: any) {
      healthcheck.message = e;
      res.status(503).send(healthcheck);
    }
  });
}

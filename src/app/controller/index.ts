import { getLogger } from 'log4js';
import { init as initController } from 'controller/controller';

export function init() {
  getLogger().info(`initializing controller...`);
  initController();
}

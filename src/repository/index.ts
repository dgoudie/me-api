import { getLogger } from 'log4js';
import { init as initMeRepository } from '../repository/me.repository';

export function init() {
  getLogger().info(`initializing repository...`);
  initMeRepository();
}

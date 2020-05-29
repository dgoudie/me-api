import { getInfo } from 'repository/me.repository';

export async function handleQuery() {
  try {
    return getInfo();
  } catch (e) {
    throw new Error('Unable to query database.');
  }
}

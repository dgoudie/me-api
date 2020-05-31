import { Info } from '@stan/me-types';
import { getInfo } from 'repository/me.repository';
import { sortBy } from 'lodash';

export async function handleQuery() {
  try {
    return getInfo().then(sortFields);
  } catch (e) {
    throw new Error('Unable to query database.');
  }
}

function sortFields(info: Info) {
  return {
    ...info,
    workExperience: sortBy(info.workExperience, (we) => we.startDate).reverse(),
    topSkills: sortBy(info.topSkills, (ts) => ts.percentage),
  };
}

import { getInfo, getWebsiteStackItemInfo } from '../repository/me.repository';

import { Info } from '@dgoudie/me-types';
import { sortBy } from 'lodash';

export async function handleInfoQuery() {
  try {
    return getInfo().then(sortFields);
  } catch (e) {
    throw new Error('Unable to query database.');
  }
}
export async function handleWebsiteStackItemInfoQuery({ id }: { id: string }) {
  try {
    return getWebsiteStackItemInfo(id);
  } catch (e) {
    throw new Error('Unable to query database.');
  }
}

function sortFields(info: Info): Info {
  return {
    ...info,
    workExperience: sortBy(info.workExperience, (we) => we.startDate).reverse(),
    topSkills: sortBy(info.topSkills, (ts) => ts.percentage),
  };
}

export let properties = {
  serviceName: process.env.npm_package_name,
  serviceShortName: process.env.npm_package_name.replace(/-v[0-9]+/, ''),
  serviceVersion: process.env.npm_package_name.replace(/.+-(v[0-9]+)/, '$1'),
  serviceDescription: process.env.npm_package_description,
  mongodbDbName: null,
  mongodbCollectionName: 'INFO',
};

export function overwriteProperties(newProperties: any) {
  properties = { ...properties, ...newProperties };
}

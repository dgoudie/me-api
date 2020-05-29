import { Collection, MongoClient } from 'mongodb';

import { properties } from 'resources/properties';

let collection: Collection;

export async function init() {
  let mongoClient = new MongoClient(process.env.MONGODB_CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  mongoClient = await mongoClient.connect();
  collection = mongoClient
    .db(properties.mongodbDbName)
    .collection(properties.mongodbCollectionName);
}

export function getInfo() {
  return collection.findOne({});
}

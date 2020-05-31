import { Collection, MongoClient } from 'mongodb';

import { Info } from '@stan/me-types';
import { getLogger } from 'log4js';
import { properties } from 'resources/properties';

let mongoClient: MongoClient;
let collection: Collection<Info>;

export async function init() {
  mongoClient = new MongoClient(process.env.MONGODB_CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,
  });
  mongoClient.connect();
  collection = mongoClient
    .db(properties.mongodbDbName)
    .collection<Info>(properties.mongodbCollectionName);
}

export function getInfo() {
  return collection.findOne({});
}

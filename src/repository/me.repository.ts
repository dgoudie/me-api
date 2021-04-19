import { Collection, MongoClient } from 'mongodb';

import { properties } from '../resources/properties';
import { Edge, Node } from 'react-flow-renderer';
import {
  EducationItem,
  Info,
  Link,
  TopSkillItem,
  WebsiteStackDialogElementData,
  WebsiteStackGraphElement,
  WorkExperienceItem,
} from '@dgoudie/me-types';

let mongoClient: MongoClient;
let infoCollection: Collection<Info>;
let educationCollection: Collection<EducationItem>;
let linksCollection: Collection<Link>;
let topSkillsCollection: Collection<TopSkillItem>;
let workExperienceCollection: Collection<WorkExperienceItem>;
let websiteStackElementsCollection: Collection<
  WebsiteStackGraphElement & Node<WebsiteStackDialogElementData>
>;
let websiteStackEdgesCollection: Collection<Edge<void>>;

export async function init() {
  if (!process.env.MONGODB_CONNECTION_URL) {
    throw new Error(
      'Environment variable MONGODB_CONNECTION_URL not provided.'
    );
  }
  mongoClient = new MongoClient(process.env.MONGODB_CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,
  });
  mongoClient.connect();
  const db = mongoClient.db(properties.mongodbDbName!);

  infoCollection = db.collection(properties.mongodbInfoCollectionName);
  educationCollection = db.collection(
    properties.mongodbEducationCollectionName
  );
  linksCollection = db.collection(properties.mongodbLinksCollectionName);
  topSkillsCollection = db.collection(
    properties.mongodbTopSkillsCollectionName
  );
  workExperienceCollection = db.collection(
    properties.mongodbWorkExperienceCollectionName
  );
  websiteStackElementsCollection = db.collection(
    properties.mongodbWebsiteStackElementsCollectionName
  );
  websiteStackEdgesCollection = db.collection(
    properties.mongodbWebsiteStackEdgesCollectionName
  );
}

export function getInfo() {
  return infoCollection.findOne({});
}

export function getEducation() {
  return educationCollection.find().toArray();
}
export function getLinks() {
  return linksCollection.find().toArray();
}
export function getTopSkills() {
  return topSkillsCollection.find().sort({ percentage: -1, name: 1 }).toArray();
}
export function getWorkExperience() {
  return workExperienceCollection.find().sort({ startDate: -1 }).toArray();
}

export function getWebsiteStackNodes(): Promise<WebsiteStackGraphElement[]> {
  return websiteStackElementsCollection
    .aggregate([
      {
        $unset: [
          'data.description',
          'data.links',
          'data.additionalImages',
          'data.theme',
        ],
      },
    ])
    .toArray();
}

export async function getWebsiteStackDialogData({
  id,
}: {
  id: string;
}): Promise<WebsiteStackDialogElementData | null> {
  const results = await websiteStackElementsCollection
    .aggregate<WebsiteStackDialogElementData>([
      {
        $unset: [
          'data.column',
          'data.columnSpan',
          'data.yPosition',
          'data.handles',
        ],
      },
      {
        $match: {
          id,
        },
      },
      {
        $replaceRoot: {
          newRoot: '$data',
        },
      },
    ])
    .toArray();
  return !!results?.length ? results[0] : null;
}

export function getWebsiteStackEdges() {
  return websiteStackEdgesCollection.find().toArray();
}

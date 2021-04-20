import {
  DateScalar,
  WebsiteStackDialogDataElementScalar,
  WebsiteStackGraphElementScalar,
} from '../utils/graphql-scalars';

import { buildSchema } from 'graphql';
import express from 'express';
import graphqlHTTP from 'express-graphql';
import { properties } from '../resources/properties';
import {
  getInfo,
  getWebsiteStackNodes,
  getWebsiteStackDialogData,
  getLinks,
  getEducation,
  getWorkExperience,
  getTopSkills,
  getWebsiteStackEdges,
  getRecentProjects,
} from '../repository/me.repository';

export function init(app: express.Application) {
  app.use(
    '/graphql',
    graphqlHTTP({
      schema: buildSchema(properties.graphQlTypeDefs),
      rootValue: {
        // query handlers
        info: getInfo,
        links: getLinks,
        education: getEducation,
        workExperience: getWorkExperience,
        topSkills: getTopSkills,
        recentProjects: getRecentProjects,
        websiteStackNodes: getWebsiteStackNodes,
        websiteStackEdges: getWebsiteStackEdges,
        websiteStackDialog: getWebsiteStackDialogData,
        // scalars
        Date: DateScalar,
        WebsiteStackDialogElementData: WebsiteStackDialogDataElementScalar,
        WebsiteStackGraphElement: WebsiteStackGraphElementScalar,
      },
      graphiql: true,
    })
  );
}

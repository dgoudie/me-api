import {
  DateScalar,
  WebsiteStackElementsScalar,
} from '../utils/graphql-scalars';
import {
  handleInfoQuery,
  handleWebsiteStackItemInfoQuery,
} from '../services/service';

import { buildSchema } from 'graphql';
import express from 'express';
import graphqlHTTP from 'express-graphql';
import { properties } from '../resources/properties';

export function init(app: express.Application) {
  app.use(
    '/graphql',
    graphqlHTTP({
      schema: buildSchema(properties.graphQlTypeDefs),
      rootValue: {
        info: handleInfoQuery,
        websiteStackItemInfo: handleWebsiteStackItemInfoQuery,
        Date: DateScalar,
        WebsiteStackElements: WebsiteStackElementsScalar,
      },
      graphiql: true,
    })
  );
}

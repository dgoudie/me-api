import { DateScalar } from 'utils/graphql-date-scalar';
import { buildSchema } from 'graphql';
import express from 'express';
import graphqlHTTP from 'express-graphql';
import { handleQuery } from 'services/service';
import { properties } from 'resources/properties';

export function init(app: express.Application) {
  app.use(
    '/graphql',
    graphqlHTTP({
      schema: buildSchema(properties.graphQlTypeDefs),
      rootValue: { info: handleQuery, Date: DateScalar },
      graphiql: true,
    })
  );
}

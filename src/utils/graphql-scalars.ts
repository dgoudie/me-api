import { Edge } from 'react-flow-renderer';
import { GraphQLScalarType, Kind } from 'graphql';

import {
  WebsiteStackDialogElementData,
  WebsiteStackGraphElement,
} from '@dgoudie/me-types';

class JsonGraphQLScalarType<T> extends GraphQLScalarType {
  constructor({ name, description }: { name: string; description: string }) {
    super({
      name,
      description,
      parseValue(value) {
        return JSON.parse(value);
      },
      serialize(value: T) {
        return JSON.stringify(value);
      },
      parseLiteral(ast) {
        if (ast.kind === Kind.INT) {
          return parseInt(ast.value, 10);
        }
        return null;
      },
    });
  }
}

export const DateScalar = new GraphQLScalarType({
  name: 'Date',
  description: 'Date custom scalar',
  parseValue(value) {
    return new Date(value);
  },
  serialize(value: Date) {
    return value.toISOString();
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.INT) {
      return parseInt(ast.value, 10);
    }
    return null;
  },
});

export const WebsiteStackGraphElementScalar = new JsonGraphQLScalarType<WebsiteStackGraphElement>(
  {
    name: 'WebsiteStackGraphElement',
    description: 'WebsiteStackGraphElement custom scalar',
  }
);
export const WebsiteStackDialogDataElementScalar = new JsonGraphQLScalarType<WebsiteStackDialogElementData>(
  {
    name: 'WebsiteStackDialogData',
    description: 'WebsiteStackDialogData custom scalar',
  }
);
export const EdgeScalar = new JsonGraphQLScalarType<Edge<void>>({
  name: 'Edge',
  description: 'Edge custom scalar',
});

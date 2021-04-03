import { Elements, HandleProps } from 'react-flow-renderer';
import { GraphQLScalarType, Kind } from 'graphql';

import { WebsiteStackGraphElementData } from '@dgoudie/me-types';

export const DateScalar = new GraphQLScalarType({
  name: 'Date',
  description: 'Date custom scalar',
  parseValue(value) {
    return new Date(value); // value from the client
  },
  serialize(value: Date) {
    return value.toISOString(); // value sent to the client
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.INT) {
      return parseInt(ast.value, 10); // ast value is always in string format
    }
    return null;
  },
});
export const WebsiteStackElementsScalar = new GraphQLScalarType({
  name: 'WebsiteStackElements',
  description: 'WebsiteStackElements custom scalar',
  parseValue(value) {
    return JSON.parse(value); // value from the client
  },
  serialize(value: Elements<WebsiteStackGraphElementData>) {
    return JSON.stringify(value); // value sent to the client
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.INT) {
      return parseInt(ast.value, 10); // ast value is always in string format
    }
    return null;
  },
});
export const HandlePropsScalar = new GraphQLScalarType({
  name: 'HandleProps',
  description: 'HandleProps custom scalar',
  parseValue(value) {
    return JSON.parse(value); // value from the client
  },
  serialize(value: HandleProps) {
    return JSON.stringify(value); // value sent to the client
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.INT) {
      return parseInt(ast.value, 10); // ast value is always in string format
    }
    return null;
  },
});

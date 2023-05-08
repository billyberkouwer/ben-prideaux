import { SchemaTypeDefinition, defineType } from 'sanity';
import { Homepage, Project } from './schemaTypes';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    Project,
    Homepage
  ],
}

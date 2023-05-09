import { SchemaTypeDefinition, defineType } from 'sanity';
import { Categories, Homepage, Project, Roles } from './schemaTypes';

const singletonTypes = new Set(["homepage"])

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    Project,
    Homepage,
    Categories,
    Roles,
  ],
  //@ts-ignore
  templates: (templates: any) =>
      templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),
}

import { type SchemaTypeDefinition } from "sanity";
import { page } from "./documents/page";
import { home } from "./documents/home";
import { roles } from "./documents/roles";
import { columnImage } from "./objects/columnImage";
import { pageBuilder } from "./objects/pageBuilder";
import { row } from "./objects/row";
import { columnVideo } from "./objects/columnVideo";
import { columnWidth } from "./objects/columnWidth";
import { columnOffset } from "./objects/columnOffset";
import { columnParagraph } from "./objects/columnParagraph";
import { aspectRatio } from "./objects/aspectRatio";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [page, home, roles, columnImage, columnWidth, columnOffset, columnVideo, columnParagraph, pageBuilder, row, aspectRatio],
};

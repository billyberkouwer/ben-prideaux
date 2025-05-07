import {
  RiBriefcase2Line,
  RiBriefcase3Fill,
  RiHome2Line,
} from "react-icons/ri";
import type { StructureResolver } from "sanity/structure";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S, context) =>
  S.list()
    .title("Content")
    .items([
      // ...S.documentTypeListItems(),
      S.listItem()
        .title("Home")
        .id("home")
        .icon(RiHome2Line)
        .child(
          S.document().schemaType("home").documentId("home").title("Home")
        ),
      S.listItem()
        .title("Project Pages")
        .icon(RiBriefcase2Line)
        .child(S.documentTypeList("projectPage")),
    ]);

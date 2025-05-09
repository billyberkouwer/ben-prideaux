import { orderableDocumentListDeskItem } from "@sanity/orderable-document-list";
import { RiBriefcase2Line, RiHome2Line } from "react-icons/ri";
import type { StructureResolver } from "sanity/structure";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S, context) =>
  S.list()
    .title("Content")
    .items([
      orderableDocumentListDeskItem({
        type: "projectPage",
        title: "Project Pages",
        S,
        context,
        icon: RiBriefcase2Line,
      }),
      S.listItem()
        .title("Home")
        .id("home")
        .icon(RiHome2Line)
        .child(
          S.document().schemaType("home").documentId("home").title("Home")
        ),
    ]);

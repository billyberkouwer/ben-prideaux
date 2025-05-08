import { listOptions } from "@/sanity/lib/constants";
import { defineType } from "sanity";

export const columnWidth = defineType({
  type: "number",
  options: { list: listOptions },
  name: "columnWidth",
  title: "Width in Columns",
  initialValue: 6,
});

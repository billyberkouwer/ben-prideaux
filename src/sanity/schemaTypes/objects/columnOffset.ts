import { listOptions } from "@/sanity/lib/constants";
import { defineType } from "sanity";

export const columnOffset = defineType({
  type: "number",
  options: { list: [{ value: 0, title: "0 columns" }, ...listOptions] },
  name: "columnOffset",
  title: "Offset in Columns",
  initialValue: 0,
});

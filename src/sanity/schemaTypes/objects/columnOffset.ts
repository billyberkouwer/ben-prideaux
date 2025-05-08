import { listOptions } from "@/sanity/lib/constants";
import { defineType } from "sanity";

export const columnOffset = defineType({
  type: "string",
  options: { list: listOptions },
  name: "columnOffset",
  title: "Offset in Columns",
  initialValue: "0"
});

import { defineField, defineType } from "sanity";
import { RiPagesLine } from "react-icons/ri";

export const page = defineType({
  name: "projectPage",
  type: "document",
  title: "Project Pages",
  icon: RiPagesLine,
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Page Title",
    }),
  ],
});

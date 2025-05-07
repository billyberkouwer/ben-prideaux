import { defineField, defineType } from "sanity";
import { RiPagesLine } from "react-icons/ri";

export const home = defineType({
  name: "home",
  type: "document",
  title: "Homepage",
  icon: RiPagesLine,
  fields: [
    defineField({
        name: "title",
        type: "string",
        title: "Page Title",
      }),
  ],
});

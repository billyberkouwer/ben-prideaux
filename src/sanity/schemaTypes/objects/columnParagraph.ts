import { RiParagraph } from "react-icons/ri";
import { defineField, defineType } from "sanity";

export const columnParagraph = defineType({
  name: "columnParagraph",
  title: "Paragraph",
  type: "object",
  icon: RiParagraph,
  fields: [
    defineField({
      name: "paragraphText",
      title: "Paragraph Text",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      type: "columnWidth",
      name: "columnWidth",
      title: "Paragraph Width",
      description:
        "Width of the paragraph in columns, where 12 is full page width.",
    }),
    defineField({
      type: "columnOffset",
      name: "columnOffset",
      title: "Paragraph Offset",
      description:
        "Offset of the paragraph in columns. To ensure a smooth flow of page content, the width + offset should not exceed 12 columns.",
    }),
  ],
  preview: {
    select: {
      text: "paragraphText.[0].children.[0].text",
      width: "columnWidth",
      offset: "columnOffset",
    },
    prepare({ width, offset, text }) {
      console.log(text)
      return {
        title: "Paragraph item",
        subtitle:
          "Columns occupied: " +
          (parseInt(width) + parseInt(offset)) +
          (text ? ". " + text : ""),
      };
    },
  },
});

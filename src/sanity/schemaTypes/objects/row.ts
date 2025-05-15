import { RiLayoutRowLine } from "react-icons/ri";
import { defineArrayMember, defineField, defineType } from "sanity";

export const row = defineType({
  name: "row",
  type: "object",
  title: "Row",
  icon: RiLayoutRowLine,
  description:
    "A row typically contains 12 columns. Objects can occupy a set number of columns and also be offset by a number of columns. To keep a convenient flow of your content, aim to have each row comprise no more than 12 columns.",
  fields: [
    defineField({
      type: "array",
      title: "Row Items",
      name: "rowItems",
      of: [
        defineArrayMember({ type: "columnImage" }),
        defineArrayMember({ type: "columnVideo" }),
        defineArrayMember({ type: "columnParagraph" }),
      ],
    }),
    defineField({
      type: "boolean",
      name: "hasPadding",
      title: "Should this row have padding?",
      description: "This adds padding/margin to the top and bottom of this row. This can give some breathing room between this piece of content and the surrounding rows.",
      initialValue: false,
    })
  ],
  preview: {
    select: {
      items: "rowItems",
    },
    prepare({ items }) {
      const sizes = items?.map((item) => {
        const width = parseInt(item.columnWidth);
        const offset = parseInt(item.columnOffset);

        if (offset) {
          return width + offset;
        }

        return width;
      });
      const total = sizes?.reduce((acc: number, curr: number) => acc + curr);

      return {
        title: "Row",
        subtitle: "Total number of columns: " + (total ? total : 0) + " / 12",
      };
    },
  },
});

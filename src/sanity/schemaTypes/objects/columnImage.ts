import { RiImage2Line } from "react-icons/ri";
import { defineField, defineType } from "sanity";

export const columnImage = defineType({
  name: "columnImage",
  title: "Image",
  type: "object",
  icon: RiImage2Line,
  fields: [
    defineField({
      type: "image",
      name: "image",
      title: "Image",
    }),
    defineField({
      type: "columnWidth",
      name: "columnWidth",
      title: "Image Width",
      description: "Width of the image in columns, where 12 is full page width."
    }),
    defineField({
      type: "columnOffset",
      name: "columnOffset",
      title: "Image Offset",
      description: "Offset of the image in columns. To ensure a smooth flow of page content, the width + offset should not exceed 12 columns."
    }),
    defineField({
      type: "columnVerticalAlignment",
      name: "columnVerticalAlignment",
      title: "Vertical Alignment",
    }),
  ],
  preview: {
    select: {
      width: "columnWidth",
      imageUrl: "image.asset.url",
      offset: "columnOffset"
    },
    prepare({ width, imageUrl, offset }) {
      return {
        title: "Image item",
        subtitle: "Columns occupied: " + (parseInt(width) + parseInt(offset)),
        imageUrl: imageUrl,
      };
    },
  },
});

import { RiVideoLine } from "react-icons/ri";
import { defineField, defineType } from "sanity";

export const columnVideo = defineType({
  name: "columnVideo",
  title: "Video",
  type: "object",
  icon: RiVideoLine,
  fields: [
    defineField({
      title: "Title",
      name: "title",
      type: "string",
      description:
        "You can optionally give the video a title to keep track of it in Sanity",
    }),
    defineField({
      type: "url",
      name: "videoUrl",
      title: "Video Url",
    }),
    defineField({
      type: "aspectRatio",
      name: "videoAspectRatio",
      title: "Video Aspect Ratio"
    }),
    defineField({
      type: "columnWidth",
      name: "columnWidth",
      title: "Video Width",
      description:
        "Width of the video in columns, where 12 is full page width.",
    }),
    defineField({
      type: "columnOffset",
      name: "columnOffset",
      title: "Video Offset",
      description:
        "Offset of the video in columns. To ensure a smooth flow of page content, the width + offset should not exceed 12 columns.",
    }),
  ],
  preview: {
    select: {
      title: "title",
      width: "columnWidth",
      offset: "columnOffset",
    },
    prepare({ width, offset, title }) {
      return {
        title: (title ? title + " v" : "V") + "ideo item",
        subtitle: "Columns occupied: " + (parseInt(width) + parseInt(offset)),
      };
    },
  },
});

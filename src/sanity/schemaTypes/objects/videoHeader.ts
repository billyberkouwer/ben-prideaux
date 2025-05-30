import { RiVideoLine } from "react-icons/ri";
import { defineField, defineType } from "sanity";

export const videoHeader = defineType({
  name: "videoHeader",
  title: "Video",
  type: "object",
  icon: RiVideoLine,
  fields: [
    defineField({
      type: "url",
      name: "videoUrl",
      title: "Video Url",
    }),
    defineField({
      type: "aspectRatio",
      name: "videoAspectRatio",
      title: "Video Aspect Ratio",
    }),
    defineField({
      type: "boolean",
      name: "showControls",
      title: "Show Controls",
      initialValue: true,
    }),
    defineField({
      type: "boolean",
      name: "cropYoutubeUI",
      title: "Crop YouTube UI",
      initialValue: true
    })
  ],
  validation: (rule) =>
    rule.custom((val, ctx) => {
      if (ctx.document?.enableVideoHeader === true) {
        if (!val) {
          return "This field is required when you are choosing to use a video header on the project page.";
        }
      }
      return true;
    }),
  options: {
    collapsible: true,
    collapsed: false,
  },
  preview: {
    select: {
      title: "title",
    },
    prepare({ title }) {
      return {
        title: (title ? title + " h" : "H") + "eader video",
      };
    },
  },
});

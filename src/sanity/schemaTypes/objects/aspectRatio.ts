import { defineField, defineType } from "sanity";

export const aspectRatio = defineType({
  name: "aspectRatio",
  title: "Aspect Ratio",
  type: "object",
  description: "As your videos can come from a range of different sources, providing the accurate video aspect ratio helps to display your video optimally on the site.",
  fields: [
    defineField({
      name: "x",
      type: "number",
      title: "X Axis",
      description: "E.g. if video ratio is 16 / 9, the X Axis would be 16.",
      initialValue: 16
    }),
    defineField({
      name: "y",
      type: "number",
      title: "Y Axis",
      description: "E.g. if video ratio is 4 / 3, the Y Axis would be 3.",
      initialValue: 9
    }),
  ],
});

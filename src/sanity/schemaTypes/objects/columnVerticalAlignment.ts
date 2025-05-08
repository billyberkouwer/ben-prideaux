import { defineType } from "sanity";

export const columnVerticalAlignment = defineType({
  type: "string",
  name: "columnVerticalAlignment",
  options: {
    list: [
      { title: "Top", value: "align-self-start" },
      { title: "Middle", value: "align-self-center" },
      { title: "Bottom", value: "align-self-end" },
    ],
  },
  description:
    "If this item is shorter than another item on this row, you can choose whether it should align to the top, middle or bottom of the row.",
  initialValue: "align-self-start",
});

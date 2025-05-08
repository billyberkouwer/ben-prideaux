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
    defineField({
      name: "date",
      type: "date",
      options: { dateFormat: "YYYY" },
    }),
    defineField({
      name: "role",
      type: "array",
      title: "Roles",
      description: "List your roles in the project. Search for an existing role - if it doesn't exist, create a new one.",
      of: [
        {
          type: "reference",
          to: [{ type: "role" }],
        },
      ],
    }),
    defineField({
      type: "pageBuilder",
      name: "pageBuilder",
      title: "Project Page Builder"
    })
  ],
});

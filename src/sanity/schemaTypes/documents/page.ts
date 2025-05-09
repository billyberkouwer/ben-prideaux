import { defineField, defineType } from "sanity";
import { RiPagesLine } from "react-icons/ri";
import {
  orderRankField,
  orderRankOrdering,
} from "@sanity/orderable-document-list";

export const page = defineType({
  name: "projectPage",
  type: "document",
  title: "Project Pages",
  orderings: [orderRankOrdering],
  icon: RiPagesLine,
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Page Title",
    }),
    defineField({
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: "title",
        maxLength: 200, // will be ignored if slugify is set
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
      },
      description: `A slug is required to display the page on the website. It is used in the URL.`,
      validation: (Rule) => Rule.required(),
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
      description:
        "List your roles in the project. Search for an existing role - if it doesn't exist, create a new one.",
      of: [
        {
          type: "reference",
          to: [{ type: "role" }],
        },
      ],
    }),
    defineField({
      type: "boolean",
      title: "Enable project video header?",
      name: "enableVideoHeader",
      initialValue: false,
    }),
    defineField({
      type: "videoHeader",
      name: "videoHeader",
      title: "Video Header",
      hidden: ({ document }) => (document?.enableVideoHeader ? false : true),
    }),
    defineField({
      type: "pageBuilder",
      name: "pageBuilder",
      title: "Project Page Builder",
    }),
    orderRankField({ type: "projectPage", newItemPosition: "before" }),
  ],
});

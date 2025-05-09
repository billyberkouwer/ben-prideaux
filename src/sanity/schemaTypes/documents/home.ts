import { defineField, defineType } from "sanity";
import { RiPagesLine } from "react-icons/ri";

export const home = defineType({
  name: "home",
  type: "document",
  title: "Homepage",
  icon: RiPagesLine,
  groups: [
    { name: "about", title: "About" },
    { name: "contact", title: "Contact" },
  ],
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Portfolio Title",
    }),
    defineField({
      name: "subtitle",
      type: "string",
      title: "Portfolio Subtitle",
    }),
    defineField({
      name: "pageColors",
      type: "pageColors"
    }),
    defineField({
      name: "aboutText",
      type: "array",
      of: [{ type: "block" }],
      title: "About Text",
      group: "about",
    }),
    defineField({
      name: "aboutImages",
      type: "array",
      of: [{ type: "image" }],
      title: "About Images",
      group: "about",
    }),
    defineField({
      name: "contactText",
      type: "array",
      of: [{ type: "block" }],
      title: "Contact Text",
      group: "contact",
    }),
    defineField({
      name: "emailAddress",
      type: "string",
      title: "Your Contact Address",
      group: "contact",
    }),
  ],
});

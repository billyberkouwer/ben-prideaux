import { defineField, defineType } from "sanity";

export const pageColors = defineType({
    type: "object",
    name: "pageColors",
    title: "Page Colours",
    options: {
        collapsed: true
    },
    fields: [
        defineField({
            type: "color",
            name: "foregroundColor",
            title: "Foreground Colour",
            description: "Colours foreground elements, e.g. text",
        }),
        defineField({
            type: "color",
            name: "backgroundColor",
            title: "Background Colour",
        }),
    ]
})
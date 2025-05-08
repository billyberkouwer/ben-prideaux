import { RiHashtag } from "react-icons/ri";
import { defineType } from "sanity";

export const roles = defineType({
    name: "role",
    type: "document",
    title: "Role",
    icon: RiHashtag,
    fields: [{
        type: "string",
        name: "title",
        title: "Title",
        description: "E.g. Editor"
    }]
})
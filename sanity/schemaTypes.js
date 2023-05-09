export const Project = {
    title: "Project Pages",
    name: "projectPage",
    type: "document",
    fields: [
        {
            title: "Title",
            name: "projectTitle",
            type: "string",
        },
        {
            title: "Video Link (URL)",
            name: "projectContentURL",
            type: "url",
        },
        {
            title: "Is High Priority Project?",
            name: "isPriority",
            initialValue: false,
            description: "Determines the size of the space the project occupies on the homepage.",
            type: "boolean",
        },
        {
            title: "Thumbnail",
            name: "projectThumbnail",
            type: "image"
        },
        {
            title: "Description",
            name: "projectDescription",
            type: "array",
            of: [{ type: "block" }]
        },
        {
            title: "Homepage Excerpt",
            name: "homepageExcerpt",
            type: "array",
            of: [{ type: "block" }]
        },
        {
            title: "Categories",
            name: "projectCategories",
            type: 'array',
            of: [{
                type: 'reference',
                to: [{ type: "categories" }]
            }]
        },
        {
            title: "Roles",
            name: "projectRoles",
            type: 'array',
            description: "The roles you performed on the project.",
            of: [{
                type: 'reference',
                to: [{ type: "roles" }]
            }]
        },
    ]
}

export const Homepage = {
    title: "Homepage",
    name: "homepage",
    type: "document",
    fields: [
        {
            title: "Portfolio Title",
            name: "portfolioTitle",
            type: "string",
        },
        {
            title: "Portfolio Subtitle",
            name: "portfolioSubTitle",
            type: "string",
        },
        {
            title: "Splash Screen Video File",
            name: "splashScreenVideo",
            type: "file",
        },
        {
            title: "Background Gradient Colors",
            name: "backgroundGradientColor",
            type: 'array',
            description: 'These will default to the original colours if they are not defined here.',
            validation: Rule =>
                Rule.custom(colorArr => {
                    if (colorArr?.length && colorArr.length !== 3) {
                        return 'You need to add 3 colours if you set custom colours'
                    } else {
                        return true
                    }
                }
                ),
            of: [{
                type: "color",
                name: "bgColor",
                title: "Colour",
            }]
        },
        {
            title: "Videos Displayed First",
            name: 'videosDisplayedFirst',
            description: 'Videos added here will display first in the portfolio, in the order they are placed in.',
            type: 'reference',
            to: [{ type: 'projectPage' }]
        }
    ]
}

export const Categories = {
    title: "Categories",
    name: "categories",
    type: "document",
    fields: [
        {
            title: "Caregory Name",
            name: "categoryName",
            type: "string",
        },]
}

export const Roles = {
    title: "Roles",
    name: "roles",
    type: "document",
    fields: [
        {
            title: "Role Name",
            name: "roleName",
            type: "string",
        },]
}
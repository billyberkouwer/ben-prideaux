export const Project = {
    title: "Project Page",
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
            title: "Description",
            name: "projectDescription",
            type: "array",
            of: [{type: "block"}]
        },
        {
            title: "Categories",
            name: "projectCategories",
            type: "array",
            of: [{
                type: "string",
                name: "categoryName",
                title: "Category"
            }]
        },
        {
            title: "Roles",
            name: "projectRoles",
            type: "array",
            of: [{
                type: "string",
                name: "roleName",
                title: "Role"
            }]
        }
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
            title: "Splash Screen Video File",
            name: "splashScreenVideo",
            type: "file",
        },
        {
            title: "Background Gradient Colors",
            name: "backgroundGradientColor",
            type: 'array',
            description: 'Colours will default to original colours if they are not defined here',
            validation: Rule => 
                Rule.required().custom(colorArr => 
                    {   console.log(colorArr)
                        if (colorArr.length && colorArr.length !== 3) {
                            return 'You need to add 3 colours if you set custom colours, YOU CUNT'
                        }
                    }
                ),
            of: [{
                type: "color",
                name: "bgColor",
                title: "Colour",
            }]
        }
    ]
}
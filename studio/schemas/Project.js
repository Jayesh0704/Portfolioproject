export default {
    name: "project",
    title: "Project",
    type:"document",
    fields:[
        {
            name:"title",
            type:"string"

        },
        {
            name:"date",
            type:"datetime"
        },
        {
            name:"place",
            type:"string"
        },
        {
            name:"description",
            type:"text"
        },
        {
            name:"project",
            title:"project type",
            type:"string",
            options:{
                lists:[
                    {value:"personal",title:"personal"},
                    {value:"client",title:"Client"},
                    {value:"school",title:"School"},

                ],
            },
        },
        {
            name:"link",
            type:"url",
        },
        {
            name:"tags",
            type:"array",
            of:[
                {
                    type:"string",

                }
            ],
            options:{
                layout:"tags"
            },
        },
    ],
};
[
      {
        tab_name: "General setting",
        settings: [{
                name: 'article',
                label: 'Select article',
                type: 'picker',
                value: [],
                options: {
                    "button_text": 'Browse article',
                    "multiple": false,
                    "search": true,
                    "type": 'article',
                    "title": 'Article',
                    "layout": 'list',
                    "default": 'main-menu'
                }
            },


        ]
    },
    {
        tab_name: "Sidebar",
        settings: [{
                type: "toggle",
                label: "Use sidebar",
                name: "use_sidebar",
                value: "yes"
            },
            {
                name: 'style_sidebar',
                label: 'Style sidebar',
                type: 'dropdown',
                value: 'lh-right',
                options: {
                    'lh-left': 'Left',
                    'lh-right': 'Right',
                    'lh-canvas': 'Off - Canvas'
                }
            },
            {
                type: "text",
                name: "c_title",
                label: "Title category",
                value: "Category",
                relation: {
                    parent: "use_sidebar",
                    show_when: "yes"
                }
            },
            {
                name: 'blogs',
                label: 'Select categories',
                type: 'picker',
                value: [],
                options: {
                    "button_text": 'Browse categories',
                    "multiple": true,
                    "search": true,
                    "type": 'blog', // menu,collection,product,article,blog,page
                    "title": 'categories',
                    "layout": 'list',
                    "default": 'main-menu'
                },
                relation: {
                    parent: "use_sidebar",
                    show_when: "yes"
                }
            },
            {
                type: "text",
                name: "p_title",
                label: "Title most popular",
                value: "Most popular",
                relation: {
                    parent: "use_sidebar",
                    show_when: "yes"
                }
            },
            {
                name: 'popular_category',
                label: 'Select most popular category',
                type: 'picker',
                value: [],
                options: {
                    "button_text": 'Browse category',
                    "multiple": false,
                    "search": true,
                    "type": 'blog', // menu,collection,product,article,blog,page
                    "title": 'Blog',
                    "layout": 'list',
                    "default": 'main-menu'
                },
                relation: {
                    parent: "use_sidebar",
                    show_when: "yes"
                }
            },
            {
                name: 'limit_popular',
                label: 'Number of item to show',
                type: 'number_slider',
                value: 5,
                options: {
                    min: 1,
                    max: 10
                },
                relation: {
                    parent: "use_sidebar",
                    show_when: "yes"
                }
            }
        ]
    },
    {
        tab_name: "Change Text",
        settings: [{
                type: "text",
                label: "Breadcrumb",
                name: "breadcrumb",
                value: "Home<span>/ Blog</span>"
            },
            {
                type: "text",
                label: "Label by author",
                name: "label_by",
                value: "By"
            },
            {
                type: "text",
                label: "Label share social",
                name: "label_share",
                value: "Share"
            },
            {
                type: "text",
                label: "Label leave comments",
                name: "label_comments",
                value: ""
            },
            {
                type: "text",
                label: "Label name",
                name: "label_name",
                value: "Name"
            },
            {
                type: "text",
                label: "Label email",
                name: "label_email",
                value: "Email"
            },
            {
                type: "text",
                label: "Label comment",
                name: "label_comment",
                value: "Comment"
            },
            {
                type: "text",
                label: "Label submit form comment",
                name: "label_submit",
                value: "POST COMMENT"
            },
        ]
    }
]
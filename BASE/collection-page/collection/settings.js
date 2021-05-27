[
    {
        tab_name: "General",
        settings: [
            {
                name: "collection",
                label: "Pick a collection to preview with current layout",
                tooltip: "To use for only product, you can assign it  in tab assign of Product template of App",
                type: "picker",
                value: [],
                description:
                    "Use can pick a collection to preview with current layout",
                options: {
                    button_text: "Browse collection",
                    multiple: false,
                    search: true,
                    type: "collection",
                    title: "Collections",
                    layout: "list",
                    default: [],
                },
            },
            {
                type: "number_slider",
                name: "limit",
                label: "How many product to show?",
                value: 12,
                options: {
                    min: 1,
                    max: 20,
                },
            },
            {
                type: 'toggle',
                value: 'yes',
                label: 'Show rating?',
                name:"show_rating",
                description:"Rating maybe only working when published to live site",
                tooltip: "Show the product's rating. Using 3rd review platform eg: Ali reviews, Ryviu, Judgme ..."
            }
        ],
    },
    {
        tab_name: "Header",
        settings: [
            {
                type: "toggle",
                name: "show_header",
                label: "Show header?",
                value: "yes",
            },
            {
                type: "toggle",
                name: "use_custom_banner",
                value: "no",
                label: "Use your banner instead collection banner",
                relation: {
                    parent: "show_header",
                    show_when: "yes",
                },
            },
            {
                type: "css_background",
                label: "Choose Header banner",
                name: "header_banner",

                relation: {
                    parent: "show_header",
                    show_when: "yes",
                },
            },
        ],
    },
    {
        tab_name: "Image setting",
        settings: [
            {
                type: "dropdown",
                label: "Image size",
                name: "crop_type",
                options: {
                    auto: "Auto",
                    full: "Full",
                    custom: "Custom",
                },
                default: "auto",
                value: "auto",
            },
            {
                name: "crop_size",
                label: "Crop size",
                value: "480x",
                type: "text",
                relation: {
                    parent: "crop_type",
                    show_when: "custom",
                },
                description:
                    "You can specify only a width or only a height and Shopify will calculate the other dimension based on the original image size, keeping the original image's aspect ratio",
            },
            {
                type: "dropdown",
                name: "crop_position",
                description:
                    "You can specify a crop parameter to make sure that the resulting image's dimensions match the requested dimensions.",
                options: {
                    top: "Top",
                    left: "Left",
                    right: "Right",
                    bottom: "Bottom",
                    center: "Center",
                },
                label: "Crop Position",
                default: "center",
                value: "center",
            },
        ],
    },
    {
        tab_name: "Sidebar",
        settings: [
            {
                type: "toggle",
                name: "use_sidebar",
                label: "Use sidebar?",
                value: "yes",
            },
            {
                type: "group",
                name: "components",
                label: "Sidebar components",
                options: {
                    add_text: "Add new component",
                },
                params: [
                    {
                        type: "featured_products",
                        label: "Featured products",
                        settings: [
                            {
                                name: "enable",
                                type: "toggle",
                                label: "Enable this component",
                                value: "yes",
                            },
                            {
                                name: "title",
                                type: "text",
                                label: "Title",
                                value: "Featured products",
                            },
                            {
                                name: "collection",
                                label: "Pick a collection",
                                type: "picker",
                                value: [],
                                options: {
                                    button_text: "Browse collection",
                                    multiple: false,
                                    search: true,
                                    type: "collection",
                                    title: "Collections",
                                    layout: "list",
                                    default: [],
                                },
                            },
                            {
                                type: "number",
                                label: "How many product to show?",
                                value: 5,
                                name: "limit",
                                options: {
                                    min: 1,
                                    max: 20,
                                },
                            },
                            {
                                type:"toggle",
                                name:"show_rating",
                                label: "Show rating?",
                                value: "yes",
                                description:"Rating maybe only working when published to live site"
                            }
                        ],
                    },
                    {
                        type: "filter_vendor",
                        label: "Filter by vendor",
                        settings: [
                            {
                                name: "enable",
                                type: "toggle",
                                label: "Enable this component",
                                value: "yes",
                            },
                            {
                                name: "title",
                                type: "text",
                                label: "Component title",
                                value: " Filter by vendor",
                            },
                            {
                                name: "limit",
                                type: "number",
                                label: "How many vendors to filter?",
                                value: 5,
                                options: {
                                    min: 1,
                                    max:50
                                }
                            }
                        ],
                    },
                    {
                        type: "filter_type",
                        label: "Filter by type",
                        settings: [
                            {
                                name: "enable",
                                type: "toggle",
                                label: "Enable this component",
                                value: "yes",
                            },
                            {
                                name: "title",
                                type: "text",
                                label: "Component title",
                                value: " Filter by type",
                            },
                            {
                                name: "limit",
                                type: "number",
                                label: "How many types to filter?",
                                value: 5,
                                options: {
                                    min: 1,
                                    max:50
                                }
                            }
                        ],
                    },
                    {
                        type: "filter_tags",
                        label: "Filter by tags",
                        settings: [
                            {
                                name: "enable",
                                type: "toggle",
                                label: "Enable this component",
                                value: "yes",
                            },
                            {
                                name: "title",
                                type: "text",
                                label: "Component title",
                                value: " Filter by tags",
                            },
                            {
                                name: "show_collection_tags",
                                type: "toggle",
                                label: "Show tags of collection",
                                value: "yes",
                            },
                            {
                                name: "limit",
                                type: "number",
                                label: "Tags limit",
                                value: 20,
                                options: {
                                    min: 1,
                                    max:50
                                }
                            },
                            {
                                type: "textarea",
                                name: "tags",
                                label: "Fill your tags",
                                description:
                                    "Fill all your tags to filter. Space by comma, Ex: Red,Blue,Green",
                                relation: {
                                    parent: "show_collection_tags",
                                    show_when: "no",
                                },
                            },
                        ],
                    },
                    {
                        type: "filter_colors",
                        label: "Filter by colors",
                        settings: [
                            {
                                name: "enable",
                                type: "toggle",
                                label: "Enable this component",
                                value: "yes",
                            },
                            {
                                name: "title",
                                type: "text",
                                label: "Component title",
                                value: "Filter by colors",
                            },

                            {
                                name: "tags",
                                type: "textarea",
                                label: "Enter your tags to filter",
                                value: "Red,Green,Black,Blue,Yellow",
                                description:  "Fill all your tags to filter. Space by comma, Ex: Red,Blue,Green"
                            },
                        ],
                    }
                   
                ],
                value: [
                    {
                        type: "featured_products",
                        settings: {
                            enable: "yes",
                            title: "Featured products",
                            collection: [
                                {
                                    name: "Watch",
                                    thumbnail:
                                        "https://cdn.shopify.com/s/files/1/0253/1881/7839/collections/IMG_0188_256x.jpg",
                                    value: "watch",
                                },
                            ],
                            limit: 4,
                        },
                    },
                    {
                        type: "filter_vendor",
                        settings: {
                            enable: "yes",
                            title: " Filter by vendor",
                            limit: 5
                        },
                    },
                    {
                        type: "filter_type",
                        settings: {
                            enable: "yes",
                            title: " Filter by type",
                            limit:5
                        },
                    },
                    {
                        type: "filter_tags",
                        settings: {
                            enable: "yes",
                            title: " Filter by tags",
                            show_collection_tags: "yes",
                        },
                    },
                    {
                        type: "filter_colors",
                        settings: {
                            enable: "yes",
                            title: " Filter by tag colors",
                            tags: "Red,Green,Blue"
                        },
                    },
                ],
            },
        ],
    },
    {
        tab_name: "Product swatches",
        settings: [
            {
                type: "dropdown",
                name: "swatch_type",
                label: "Use swatch",
                options: {
                    none: "No",
                    color: "Show variant Colors",
                    image: "Show variant images",
                },
                default: "color",
                value: "color",
            },
            {
                type: "text",
                label: "Choose your product option display as Swatch",
                name: "option_swatch_name",
                value: "Color",
                description:"Setting your color in \"App Settings/Swatch color settings\" "
            },
        ],
    },
    {
        tab_name: "LANGUAGE",
        settings: [
            {
                name: "trans_add_cart",
                value: "Add to cart",
                label: "Add to cart button",
                type: "text",
            },
            {
                name: "trans_view_more",
                value: "View more",
                label: "View more button",
                type: "text",
            },
            {
                name: "trans_unavailable",
                value: "Unavailable",
                label: "Unavailable button",
                type: "text",
            },
            {
                name: "trans_outstock",
                value: "Outstock",
                label: "Outstock button",
                type: "text",
            },
            {
                name: "trans_quick_shop",
                value: "Quick shop",
                label: "Quick shop button",
                type: "text",
            },
            {
                name: "trans_quickview",
                value: "Quick view",
                label: "Quick view button",
                type: "text",
            },
            {
                name: "trans_wishlist",
                value: "Wishlist",
                label: "Wishlist button",
                type: "text",
            },
        ],
    },
];

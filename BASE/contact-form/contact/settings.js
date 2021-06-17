[
    {
        tab_name: "General Settings",
        settings: [
            {
                name: "cf_title",
                label: "Title",
                type: "text",
                value: "Feedback",
            },
            {
                name: "cf_des",
                label: "Description",
                type: "textarea",
                value:
                    "When you enter into any new area of science <br> you almost always find yourself.",
            },
            {
                name: "use_3_party",
                label: "Use third party mail system",
                type: "toggle",
                value: "no",
            },
            {
                name: "form_action",
                label: "Form action",
                relation: {
                    parent: "use_3_party",
                    show_when: "yes",
                },
                type: "text",
                value:
                    "//myshopify.us14.list-manage.com/subscribe/post?u=56b202e477d0fc9995c18aac3&id=a358ae9daf",
                description:
                    'Learn more What is <a href="https://docs.layouthub.com/user-guides/add-ons/third-party-email-subscribe/" target="_bank">Form action here</a> ',
            },
            {
                name: "cf_custom_form",
                label: "Custom email content",
                type: "textarea",
                relation: {
                    parent: "cf_type",
                    show_when: "yes",
                },
                value: "",
            },
        ],
    },
    {
        tab_name: "Contact Settings",
        settings: [
            {
                name: "cf_show",
                label: "Show info contact",
                type: "toggle",
                value: "yes",
            },
            {
                name: "group_items",
                label: "Group item social",
                type: "group",
                value: [
                    {
                        cf_title: "Address",
                        cf_icon:"lni lni-map-marker",
                        cf_desc: "5810 Hackett Plain Suite 705 Palo Alto, CA",
                        cf_color: "",
                    },
                    {
                        cf_title: "Email",
                        cf_icon:"lni lni-envelope",
                        cf_desc: "@layouthub.com",
                        cf_color: "#ff8364",
                    },
                    {
                        cf_title: "Phone",
                        cf_icon:"lni lni-phone",
                        cf_desc: "374-430-0510",
                        cf_color: "",
                    },
                ],
                params: [
                    {
                        name: "cf_title",
                        label: "Title",
                        type: "text",
                    },
                    
                    {
                        name: 'cf_icon',
                        label: 'Select icon',
                        type: 'icon_picker',
                        value: 'lni lni-star',
                        options: {
                            vendor:"css_line_icon",
                            ext_class: 'lni'
                        }
                    },
                    {
                        name: "cf_desc",
                        label: "Description",
                        type: "textarea",
                    }, 
                    {
                        name: "cf_color",
                        label: "Select color",
                        type: "color_picker",
                    }
                    
                ],
            },
        ],
    },
    {
        tab_name: "Map Settings",
        settings: [
            {
                name: "map_api",
                type: "text",
                value: "AIzaSyDpeVn9u-zszYjksYucy1SAP4qlz3lrs5I",
                label: "Map API key",
                description:
                    'You can visit this <a href="https://developers.google.com/maps/documentation/embed/get-api-key" target="_blank">link</a> to know how to get your Google Map API key',
            },
            {
                name: "map_lat",
                type: "text",
                value: "21.0287747",
                label: "Map latitude",
                description:
                    'You can visit this <a href="https://www.latlong.net/" target="_blank">link</a> to get google map latitude/longitude',
            },
            {
                name: "map_lng",
                type: "text",
                value: "105.850176",
                label: "Map longitude",
            },
            {
                name: "map_zoom",
                type: "number_slider",
                value: "15",
                label: "Map zoom",
                options: {
                    min: 1,
                    max: 20,
                },
            },
            {
                name: "map_marker",
                type: "image",
                value: "",
                label: "Map marker icon",
            },
            {
                name: "map_show_marker",
                type: "toggle",
                value: "yes",
                label: "Always show map marker",
            },
            {
                name: "map_style",
                type: "dropdown",
                value: "style_3",
                label: "Map style",
                options: {
                    style_1: "Style 1",
                    style_2: "Style 2",
                    style_3: "Style 3",
                },
            },
        ],
    },
    {
        tab_name: "Form Fields Settings",
        settings: [
            {
                name: "cf_message_success",
                label: "Subscribe success",
                type: "text",
                value: "Thanks for subscribing!",
            },
            {
                name: "form_fields",
                label: "Form Fields",
                type: "group",
                value: [
                    {
                        type: "TextComponent",
                        settings: {
                            cf_label: "Your name",
                            cf_name: "name",
                            cf_value: "",

                            cf_type: "text",
                        },
                    },
                    {
                        type: "TextComponent",
                        settings: {
                            cf_label: "Your email",
                            cf_name: "email",
                            cf_value: "",

                            cf_type: "email",
                        },
                    },
                    {
                        type: "TextareaComponent",
                        settings: {
                            cf_label: "Your message",
                            cf_name: "body",
                            cf_value: "",

                            cf_rows: 4,
                        },
                    },
                    {
                        type: "ButtonComponent",
                        settings: {
                            cf_label: "Send Message",
                        },
                    },
                ],
                options: {
                    add_text: "Add new item",
                },
                params: [
                    {
                        type: "TextComponent",
                        name: "Input field",
                        settings: [
                            {
                                name: "cf_label",
                                label: "Label",
                                type: "text",
                            },
                            {
                                name: "cf_name",
                                label: "Name",
                                type: "text",
                            },
                            {
                                name: "cf_placeholder",
                                label: "Placeholder",
                                type: "text",
                            },

                            {
                                name: "cf_type",
                                label: "Field type",
                                type: "dropdown",
                                value: "text",
                                options: {
                                    text: "Text",
                                    email: "Email",
                                },
                            },
                        ],
                    },
                    {
                        type: "TextareaComponent",
                        name: "Textarea field",
                        settings: [
                            {
                                name: "cf_name",
                                label: "Name",
                                type: "text",
                            },
                            {
                                name: "cf_placeholder",
                                label: "Placeholder",
                                type: "text",
                            },
                        ],
                    },
                    {
                        type: "ButtonComponent",
                        name: "Submit field",
                        settings: [
                            {
                                name: "cf_label",
                                label: "Label",
                                type: "text",
                            },
                        ],
                    },
                ],
            },
        ],
    },
];

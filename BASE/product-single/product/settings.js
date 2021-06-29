[
    {
        tab_name: "General",
        settings: [
            {
                name: "product",
                label: "Pick a product to preview with current layout",
                type: "picker",
                value: [],
                description:
                    "Use can pick a product to preview with current layout",
                options: {
                    button_text: "Browse product",
                    multiple: false,
                    search: true,
                    type: "product",
                    title: "Products", 
                    layout: "list",
                    default: [],
                },
            },

            {
                type: "toggle",
                name: "use_zoom",
                description:
                    "With Product Image Zoom, customers can enlarge product images for a closer look at material, texture, and finer details. ",
                value: "yes",
                label: "Use zoom",
            },
        ],
    },
    {
        tab_name: "Product information",
        settings: [
            {
                type: "toggle",
                label: "Show rating",
                name: "use_rating",
                value: "yes",
                description:
                    "Show the product's rating. Using 3rd review platform eg: Ali reviews, Ryviu, Judgme ...",
            },

            {
                type: "toggle",
                name: "show_social",
                label: "Show social sharing",
                value: "yes",
            },
            {
                name: "socials",
                label: "Select social platfom to show",
                type: "checkbox",
                value: "facebook,pinterest,twitter",
                options: {
                    facebook: "Facebook",
                    pinterest: "Pinterest",
                    twitter: "Twitter",
                    mail: "Mail",
                    tumblr: "Tumblr",
                },
                relation: {
                    parent: "show_social",
                    show_when: "yes",
                },
            },
        ],
    },
    {
        tab_name: "Product form",
        settings: [
            {
                name: "main_swatch",
                type: "text",
                description:
                    'Choose your product option display as Swatch <a target="_blank" href="https://docs.layouthub.com/user-guides/featured-elements/product-page/general#3-set-swatch-layout">Learn more </a>',
                label: "Select main swatch option",
                value: "Color",
            },
            {
                name: "swatch_image",
                type: "toggle",
                label: "Show the images as swatch?",
                value: "yes",
                description:
                    "By default app will display your product options as color which set in App Settings/ Swatch color settings",
            },
            {
                type: "toggle",
                name: "enable_quantity",
                label: "Enable quantity",
                value: "yes",
            },
            {
                type: "toggle",
                name: "enable_payment_button",
                value: "yes",
                label: "Show dynamic checkout button",
                description:
                    'Each customer will see their preferred payment method from those available on your store, such as PayPal or Apple Pay. <a hred="https://help.shopify.com/manual/using-themes/change-the-layout/dynamic-checkout" target="_blank">Learn more</a>',
            },
            {
                type: "toggle",
                name: "enable_external",
                label: "Enable external/affiliate product",
                value: "no",
            },
            {
                type: "text",
                name: "external_link",
                description:
                    'Learn how to setup external by metafield <a href="https://docs.layouthub.com/user-guides/featured-elements/product-page/general#8-1-enable-external-affiliate-product" target="_blank">Learn more</a>',
                label: "External/Affiliate link",
                value: "#",
                relation: {
                    parent: "enable_external",
                    show_when: "yes",
                },
            },
        ],
    },
    {
        tab_name: "Product Promote",
        settings: [
            {
                type: "toggle",
                name: "use_countdown",
                tooltip:
                    "Countdown timers are a clear visual cue which tell customers that, if they want a product, they must take action within a specified period of time. This could be a countdown until the end of a sales period, or for an offering such as next day delivery",
                label: "Enable Countdown",
                value: "yes",
            },
            {
                type: "toggle",
                name: "show_countdown_on_sale",
                description:
                    "Only show when current variant is sale. Eg: Variant compare at price > Variant price",
                label: "Show when on Sale",
                value: "no",
                options:{
                    tooltip:false
                },
                relation: {
                    parent: "use_countdown",
                    show_when: "yes",
                },
            },
            {
                type: "toggle",
                name: "use_rand_countdown",
                tooltip: "Radom countdown to time for each product",
                label: "Random countdown to date and time",
                value: "no",
                options:{
                    toolbar:false
                },
                description:
                    "Countdown from a random time to current time for each product. When end of time, it will automatic run again",
                relation: {
                    parent: "use_countdown",
                    show_when: "yes",
                },
            },
            {
                name: "enable_progress_bar",
                label: "Enable progress bar",
                value: 'yes',
                type:'toggle',
                description: "The progress bar helps the customers know how many products in stock. Boost the conversion rate",
                
            },
            {
                name: "countdown_from",
                type: "text",
                placeholder: "yyy-mm-dd h:m, 2019-12-08T16:47:00+0000",
                description:
                    "Date and time to start countdown. Examole: 2021-12-08T16:47:00+0000 or 2021-12-08T16:47:00+0000",
                label: "Countdown from",
                value: "2021-12-08T16:47:00+0000",
                options:{
                    toolbar:false
                },
                relation: {
                    parent: "enable_progress_bar",
                    show_when: "yes",
                },
            },
            {
                name: "countdown",
                options:{
                    toolbar:false
                },
                type: "text",
                placeholder: "yyy-mm-dd h:m, 2019-12-08T16:47:00+0000",
                description:
                    "Example: 60 days, 3:59:12 or 2019-12-08T16:47:00+0000. <br> To set for specific product you can using Metafield.<br /><a target='_blank' href='https://docs.layouthub.com/user-guides/layouts-support/custom-countdown-using-metafield'>Read more<a>",
                label: "Countdown to",
                value: "2025-12-08T16:47:00+0000",
                relation: {
                    parent: "use_countdown",
                    show_when: "yes",
                },
            },
           
            {
                name: "progress_bar_text",
                type:"text",
                label: "Progress bar text",
                value: "<strong>LIMITED!</strong> This sale will end after"
            }
        ],
    },
    {
        tab_name: "Product tabs",
        settings: [
            {
                type: "toggle",
                value: "yes",
                label: "Generate tab from Description",
                description:
                    'Learn how to setup <a href="https://docs.layouthub.com/user-guides/featured-elements/product-page/general#4-1-the-detail" target="_blank">Learn more</a>',
                name: "auto_tab",
            },
            {
                type: "dropdown",
                label: "Use headings to separate content into tabs",
                name: "heading_type",
                relation: {
                    parent: "auto_tab",
                    show_when: "yes",
                },
                value: "h3",
                options: {
                    h1: "Heading 1",
                    h2: "Heading 2",
                    h3: "Heading 3",
                    h4: "Heading 4",
                    h5: "Heading 5",
                    h6: "Heading 6",
                },
            },
            {
                type: "group",
                label: "Product tabs",
                tooltip:
                    "Choose your tab content you want to show below the product information",
                name: "tabs",
                options: {
                    add_text: "Add new tab",
                },
                value: [
                    {
                        type: "description",
                        settings: {
                            title: "Description",
                        },
                    },
                    {
                        type: "product_attributes",
                        settings: {
                            title: "Additional Information",
                        },
                    },
                    {
                        type: "review",
                        settings: {
                            title: "Review",
                        },
                    },
                    {
                        type: "addition_information",
                        settings: {
                            title: "Shipping & Delivery",
                            addition_infor:
                                '<p>All orders placed will be handed over to DHL within the next business day. Orders with engraving will be handed over to DHL within 3 days after the order confirmation.</p><p><br>For country specific delivery times of our courier see: <span style="text-decoration: underline"><em><strong><a href="https://buckleandseam.com/pages/shipment-return-policy">shipping Info.</a></strong></em></span></p><p><br>We encourage you to try our products, feel the leather, carry it around, and see how you feel! If you are not 100% satisfied we will be glad to assist you with an exchange or return. <strong>Holiday special:</strong> <strong>90 days return policy applies for orders placed before 24.12</strong></p><p> </p><p>Keep in mind that personalized bags are made to order and cannot be exchanged or returned. Read more on our <strong><a href="https://buckleandseam.com/pages/shipment-return-policy">return policy</a></strong>.</p>',
                        },
                    },
                ],
                params: [
                    {
                        type: "description",
                        label: "Description",
                        settings: [
                            {
                                type: "text",
                                name: "title",
                                label: "Tab title",
                                description: "Fill your tab title",
                            },
                        ],
                    },
                    {
                        type: "product_attributes",
                        label: "Product attributes",
                        settings: [
                            {
                                type: "text",
                                name: "title",
                                label: "Tab title",
                                value: "PRODUCT ATTRIBUTES",
                                description: "Fill your tab title",
                            },
                        ],
                    },
                    {
                        type: "review",
                        label: "Review",
                        settings: [
                            {
                                type: "text",
                                name: "title",
                                label: "Title",
                                value: "Reviews",
                            },
                        ],
                    },
                    {
                        type: "faq",
                        label: "FAQ",
                        settings: [
                            {
                                type: "text",
                                name: "title",
                                label: "Title",
                                value: "FAQ",
                            },
                            {
                                name: "page_faq",
                                label: "Page content",
                                type: "picker",
                                description:
                                    "Select a Faq page to show in the product tab. You must add Faq tab to show the content", 
                                value: [],
                                options: {
                                    button_text: "Browse page",
                                    multiple: false,
                                    search: true,
                                    type: "page", // menu,collection,product,article,blog,page
                                    title: "Page",
                                    layout: "list",
                                    default: "main-menu",
                                },
                            },
                        ],
                    },
                    {
                        type: "addition_information",
                        label: "Addition information",
                        settings: [
                            {
                                type: "text",
                                name: "title",
                                label: "Tab title",
                                description: "Fill your tab title",
                            },
                            {
                                type: "editor",
                                name: "addition_infor",
                                label: "Additional information",
                                description: "Liquid code allow in this block",
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        tab_name: "Extra content",
        settings: [
            {
                type: "editor",
                name: "html_b_image",
                label: "Custom content",
                description: "Custom content below product image",
                value: "",
            },
            {
                type: "editor",
                name: "html_b_price",
                label: "Custom content",
                description: "Custom content below price",
                value: "",
            },
            {
                type: "editor",
                name: "html_b_btn_cart",
                label: "Custom content",
                description: "Custom content below add to cart",
                value: "",
            },
        ],
    },
    {
        tab_name: "Change Text",
        settings: [
            {
                type: "text",
                label: "Days",
                name: "trans_label_dd",
                value: "days",
            },
            {
                type: "text",
                label: "Hours",
                name: "trans_label_hh",
                value: "hrs",
            },
            {
                type: "text",
                label: "Minute",
                name: "trans_label_mm",
                value: "min",
            },
            {
                type: "text",
                label: "Seconds",
                name: "trans_label_ss",
                value: "sec",
            },
            {
                type: "text",
                name: "trans_add_to_cart",
                value: "ADD TO CART",
                label: "Add to cart text",
            },
            {
                type: "text",
                name: "trans_pre_order",
                value: "PRE-ORDER",
                label: "Pre order",
            },

            {
                type: "text",
                label: "External/Affiliate button",
                value: "FROM AMAZON",
                name: "trans_external",
            },
            {
                type: "text",
                label: "Out of stock",
                name: "trans_outstock",
                value: "Out of stock",
            },
            {
                type: "text",
                label: "Unavailable",
                name: "trans_unavai",
                value: "Unavailable",
            },
            {
                type: "text",
                label: "New product",
                name: "trans_new",
                value: "New",
            },
            {
                type: "text",
                label: "Sold out product",
                name: "trans_sold_out",
                value: "Sold out",
            },
            {
                type: "text",
                label: "Product sale",
                name: "trans_sale",
                value: "Sale %s%",
                description:
                    "Use %s to show percent of discount. Example: Sale of %s% => Sale of 30% ",
            },
            {
                type: "text",
                label: "Product type",
                name: "trans_p_type",
                value: "Product type",
            },
            {
                type: "text",
                label: "Product vendor",
                name: "trans_p_vendor",
                value: "Product vendor",
            },
            {
                type: "text",
                label: "Quantity",
                name: "trans_quantity",
                value: "Quantity",
            },
            {
                name: "trans_countdown",
                label: "Countdown text",
                value: "Sale time:",
                type: "text",
            },
        ],
    },
];

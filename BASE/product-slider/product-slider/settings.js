[
    {
        tab_name: "General",
        settings: [
            {
                name: "collection",
                label: "Pick a collection to preview with current layout",
                tooltip:
                    "To use for only product, you can assign it  in tab assign of Product template of App",
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
                type: "text",
                name: "title",
                label: "Heading title",
                value: "Featured products",
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
                type: "toggle",
                value: "yes",
                label: "Show rating?",
                name: "show_rating",
                description:
                    "Rating maybe only working when published to live site",
                tooltip:
                    "Show the product's rating. Using 3rd review platform eg: Ali reviews, Ryviu, Judgme ...",
            },
        ],
    },
    {
        tab_name: "Slider & Responsive",
        settings: [
            {
                type: "number_slider",
                name: "item_desktop",
                value: 4,
                label: "Number item per view on Desktop",
                tooltip: "Number of slides per view (slides visible at the same time on slider's container)."
            },
            {
                type: "number_slider",
                name: "item_tablet",
                value: 3,
                label: "Number item per view on Tablet",
                tooltip: "Number of slides per view (slides visible at the same time on slider's container)."
            },
            {
                type: "number_slider",
                name: "item_mobile",
                value: 2,
                label: "Number item per view on mobile",
                tooltip: "Number of slides per view (slides visible at the same time on slider's container)."
            },
            {
                type: 'toggle',
                name: "show_pagination",
                label: 'Show pagination?',
                value: 'yes'
            },
            {
                type:'toggle',
                name: 'show_navigation',
                value: 'yes',
                label: 'Show navigation'
            }
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
                description:
                    'Setting your color in "App Settings/Swatch color settings" ',
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

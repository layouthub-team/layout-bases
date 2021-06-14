[
  {
    type: "text",
    label: "Title",
    name: "title",
    value: "Our Blog"
},
{
    type: "text",
    label: "Read more",
    name: "label_readmore",
    value: "Read more"
},
{
    name: 'limit',
    label: 'Number of item to show',
    type: 'number_slider',
    value: 6,
    options: {
        min: 2,
        max: 12
    }
},
{
    name: 'title_full',
    label: 'Show blog title',
    type: 'dropdown',
    value: 'full_text',
    options: {
        'ellipsis': 'Short title',
        'full_text': 'Full title'
    }
},
{
    name: 'blog',
    label: 'Select category',
    type: 'picker',
    value: [],
    options: {
        "button_text": 'Browse category',
        "multiple": false,
        "search": true,
        "type": 'blog',
        "title": 'Category',
        "layout": 'list',
        "default": 'main-menu'
    }
},
{
    name: 'image_size',
    label: 'Blog image size',
    type: 'text',
    description: 'Set the image size:<br/>"icon:32x32",<br/>"small: 50x50",<br/>"compact: 160x160",<br/>"medium: 240x240",<br/>"large: 480x480",<br/>"grande: 600x600",<br/>"master largest image: 2048x",<br/>"full" or "370x370_crop_center"',
    value: '324x216_crop_center'
},
]
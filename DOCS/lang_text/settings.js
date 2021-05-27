[
    {
        "tab_name":"General",
        "settings": [
            {
            name: 'title',
            label: 'My Title',
            type: 'text',
            placeholder: 'Placeholder text',
            value: 'Default '
        },
        {
        name: 'my_bg',
        label: 'Set background',
        type: 'css_background',
        value: {
            color: '#14C39B',
            image: '%URL%thumbnail.jpg',
            position: 'center center',
            repeat: 'no-repeat',
            size: 'contain'
        }
    },
        {
            name: 'field_disabled',
            label: 'field_disabled',
            type: 'text',
            value: 'Disabled value',
            options: {
                disabled: true
            }
        },
        {
            name: 'field_readonly',
            label: 'field_readonly',
            type: 'text',
            value: 'Readonly value',
            options: {
                readonly: true
            }
            }
        ]
    }
]
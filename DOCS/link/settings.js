[
    {
        name: 'cta',
        label: 'Link using text',
        type: 'link',
        value: {
	        href: '#',
	        text: 'Call to action',
	        icon: 'fa fa-star',
	        'icon-pos': 'before',
	        'data-ga-action': 'tracking'
        },
        options: {
	        icon_source: '%URL%/assets/fonts/fa-solid.css',
	        icon_class: 'fa'
        }
    },    
    {
        name: 'cta2',
        label: 'Link using image',
        type: 'link',
        value: {
	        href: '',
	        image: '%URL%/thumbnail.jpg',
	        // image: '<img src="%URL%/thumbnail.jpg" height="100" alt="Alt text" />',
	        'data-ga-action': 'tracking',
	        'data-ga-category': '',
	        'data-ga-label': '',
	        'data-fb-pixel': '',
	        'class': '',
	        'id': ''
        },
        options: {
	        type: 'image'
        }
    },
    {
        name: 'cta3',
        label: 'Link using icon',
        type: 'link',
        value: {
	        icon: 'fa fa-star'
        },
        options: {
	        type: 'icon',
	        icon_source: '%URL%/assets/fonts/fa-solid.css',
	        icon_class: 'fa'
        }
    }
]
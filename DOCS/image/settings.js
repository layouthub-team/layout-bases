[
    {
        name: 'image',
        label: 'Select an image',
        type: 'image',
        value: '%URL%thumbnail.jpg'
    },
    {
        name: 'images',
        label: 'Images Gallery',
        type: 'image',
        value: [
	        {
	        	thumbnail: '%URL%thumbnail.jpg',
	        	value: '%URL%thumbnail.jpg',
	        	name: 'Default'
	        },
	        {
	        	thumbnail: '%URL%thumbnail.jpg',
	        	value: '%URL%thumbnail.jpg',
	        	name: 'Default'
	        }
        ],
        options: {
	        multiple: true,
	        layout: 'list'
        }
    }
]
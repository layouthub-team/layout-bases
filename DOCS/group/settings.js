[   
    {
        name: 'group_1',
        label: 'Simple Group',
        type: 'group',
        value: [
	        {
	        	show_button:'yes',
		        text: 'Text 01',
		        my_icon: 'fa fa-star',
	        }
        ],
        options: {
	    	add_text: 'Add new item'  
        },
        params: [
        	{
                "type": "toggle",
                "label": "Show button action",
                "name": "show_button",
                "value": "yes"
            },
            {
	            name: 'my_icon',
		        label: 'Select icon',
		        type: 'icon_picker',
		        value: 'fa fa-star',
		        options: {
			        source: '%URL%assets/fonts/fa-solid.css',
			        ext_class: 'fa'
		        }
		    },
	        {
		        name: 'text',
		        type: 'text',
		        label: 'Text',
		        isLabel:true
	        },
	        {
		        name: 'image',
		        type: 'image',
		        label: 'Image'
	        }
        ]
    },
    {
        name: 'group_2',
        label: 'Group in group',
        type: 'group',
        value: [
	        {
		        text: "Text 02",
		        group_inner: [
			        {
				        text: 'Text 03'
			        }
		        ]
	        }
        ],
        options: {
	    	add_text: 'Add new group'  
        },
        params: [
	        {
		        name: 'text',
		        type: 'text',
		        label: 'Text'
	        },
	        {
		        name: 'group_inner',
		        type: 'group',
		        label: 'Child group',
		        params: [
			         {
				        name: 'text',
				        type: 'text',
				        label: 'Text'
			        },
			        {
				        name: 'image',
				        type: 'image',
				        label: 'Image'
			        }
		        ]
	        }
        ]
    },
    {
        name: 'group_3',
        label: 'Group types',
        type: 'group',
        value: [
	        {
		        type: 'group_type_1',
		        settings: {
			        text: 'Text 03',
			        group_inner: [
				        {
					        text: 'Text 04'
				        },
				        {
					        text: 'Text 05'
				        }
			        ]
		        }
	        }
        ],
        options: {
	    	add_text: 'Add new group'  
        },
        params: [
	        {
		        type: 'group_type_1',
		        name: 'Group 01',
		        settings: [
		        {
			        name: 'text',
			        type: 'text',
			        label: 'Text'
		        },
		        {
			        name: 'group_inner',
			        type: 'group',
			        label: 'Child group',
			        params: [
				         {
					        name: 'text',
					        type: 'text',
					        label: 'Text'
				        },
				        {
					        name: 'image',
					        type: 'image',
					        label: 'Image'
				        }
			        ]
		        }]
		    },
		    {
		        type: 'group_type_2',
		        name: 'Group 02',
		        settings: [
		        {
			        name: 'text',
			        type: 'text',
			        label: 'Text'
		        },
		        {
			        name: 'group_inner',
			        type: 'image',
			        label: 'Select image'
		        }]
		    }
        ]
    }
]
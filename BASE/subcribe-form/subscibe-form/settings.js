[{
    tab_name: 'SETTINGS',
    settings: [{
            label: "Heading",
            name: "heading",
            type: "text",
            value: "WE ARE SUPPORT & OFFER <br>BIG SALE"
        },
        {
            name: 'sub_heading',
            label: 'Sub heading',
            type: 'text',
            value: 'Join us'
        },
        {
            name: "use_3_party",
            label: "Use third party mail system",
            type: "toggle",
            value: "no",
        },
        {
            name: 'profile_user',
            label: 'Profiles',
            description: 'You need Profile Service <a href="https://docs.layouthub.com/user-guides/integration/add-edit-profile" target="_blank">[Read More]</a>',
            type: 'integration_profiles',
            value: [],
            relation: {
                show_when: "yes",
                parent: "use_3_party"
            }
        },
        {
            type: "text",
            label: "Subcribe success message",
            name: "success_text",
            value: "Thansk for subscibe"
        }
    ]
},
{
    tab_name: 'Fields Settings',
    settings: [{
        name: 'form_fields',
        label: 'Form Fields',
        type: 'group',
        value: [{
                type: 'TextComponent',
                settings: {
                    cf_label: 'Email',
                    cf_name: 'email',
                    cf_required: 'yes',
                    cf_placeholder: 'sample@email.com',
                    cf_type: 'email',
                  
                }
            },
            {
                type: 'ButtonComponent',
                settings: {
                    cf_label: 'Join Mailist',
                }
            }
        ],
        options: {
            add_text: 'Add new item'
        },
        params: [{
                type: 'TextComponent',
                name: 'Input field',
                settings: [{
                        name: 'cf_label',
                        label: 'Label',
                        type: 'text'
                    },
                    {
                        name: 'cf_name',
                        label: 'Name',
                        type: 'text'
                    },
                    {
                        name: 'cf_required',
                        type: 'toggle',
                        label: 'Required field'
                    },
                   
                    {
                        name: 'cf_placeholder',
                        label: 'Placeholder',
                        type: 'text',
                        value: "sample@email.com"
                    },
                    {
                        name: 'cf_type',
                        label: 'Field type',
                        type: 'dropdown',
                        options: {
                            'text': 'Text',
                            'email': 'Email',
                            'tel': 'Tel',
                        }
                    },
                    
                ]
            },
            {
                type: 'ButtonComponent',
                name: 'Submit field',
                settings: [{
                        name: 'cf_label',
                        label: 'Label',
                        type: 'text',
                        value: "Subscibe"
                    }
                    
                ]
            }
        ],
    }]
}
]
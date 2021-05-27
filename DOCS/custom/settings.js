[
    {
        name: 'btn',
        label: 'Change toggle',
        type: 'toggle',
        value: 'yes',
        on : {
	        'change' : (e, el) => {
		        
		        // fire when value changes
		        
		        $('#my-field-helper').val(el.value).change(); 
	        }
        }
    },
    {
        name: 'custom',
        label: 'Custom field',
        type: {
        	id: 'my_field',
        	
        	tmpl: `<div class="my-custom-field">
        			
        			<div id="showing-checkbox"></div>
        			
        			<input id="my-field-helper" value="{{@data.value}}" type="hidden" />
        			
        			<input type="hidden" class="hub-param" name="{{data.name}}" value="{{@data.value}}" />
        			
        		</div>`,
        		
        	callback: (el, data) => {
	        	
	        	el.find('#my-field-helper').on('change', function() {
		        	
		        	hub.post({action: 'picker', type: 'custom-field', data: this.value}, (res) => {
		        	
			        	el.find('#showing-checkbox').html(`
			        		
			        		${res.taxonomies.map(taxo => `
			        			<p>
			        				<input type="checkbox" name="${taxo.name}" value="${taxo.value}" />
			        			</p>
			        		`).join('')}
			        		
			        	`);
			        	
			        	el.find('#showing-checkbox input').on('change', function() {
				        	
				        	let values = {
				        		post_type: res.post_type,
				        		taxonomies: el.find('#showing-checkbox input').serializeArray()
				        	}
				        	
				        	el.find('input.hub-param').val(JSON.stringify(values)).change();
				        	
			        	});
			        	
		        	});
		        	
		        	
	        	}).change();
	        	
	        	
        	}
        },
        value: '[{"name": "name1", "value": "value1"},{"name": "name2", "value": "value2"}]'
    }
]
<pre><code>
   window.addEvent('domready',function(){

	$('confirm').addEvent('click',function(e){
		e.stop();
		new MooDialog.Confirm('Are you sure you want to do this?',function(){
                new MooDialog.Alert('Ok');
		},function(){
                new MooDialog.Alert('Cancel');
		});
	});

	$('request').addEvent('click',function(e){
		e.stop();
		new MooDialog.Request('code.js',null,{

                                  size: {
                                         width: 500,
                                         height: 300
                                        },
                                  title: 'made a request AJAX and GET code.js'
            });
	});


	$('alert').addEvent('click',function(e){
		e.stop();
		new MooDialog.Alert('Are you sure?!');
	});

	$('iframe').addEvent('click',function(e){
		e.stop();
		new MooDialog.Iframe('http://php.net',{title: 'php.net',size:{width: 700,height: 500}});

	});

	$('error').addEvent('click',function(e){
		e.stop();
		new MooDialog.Error('Error message');
	});

      $('prompt').addEvent('click',function(e){

		e.stop();
            new MooDialog.Prompt('Enter a value for this variable:',function(val){
                     new MooDialog.Alert('You have entered: "'+val+'"');
            })

      });

      $('custom').addEvent('click',function(e){

		e.stop();
            new MooDialog.Alert('This is a customized Dialog',{

                 title: 'Hello Fx.Transitions.Circ.easeOut',        
                 fx: {
                     type: 'morph',
                     open: {
                         'margin-top': [-100,0],
                         opacity: [0,1] 
                     },
                     close: {
                         'margin-top': [0,100],
                         opacity: [1,0] 
                     },
                     options:{
                         transition: Fx.Transitions.Circ.easeOut,
                         duration: 500 
                     }  
                 }  
            });
      });//end handler for event click to object with ID 'custom'

      //are you sure to continue, to go ahead...
      $('confirmContinue').confirmLinkClick('Are you sure you want to continue?!');

      //confirm submit form
      $('f').confirmSubmitForm('Are you sure to submit form?!');

      //you can create a Dialog from an Element DOM
      $('fromelement').addEvent('click',function(e){
         if(e){e.stop();}
         $('info').MooDialog({title: 'create dialog from this form',size:{width: 500,height: 340},

                 fx: {
                     type: 'morph',
                     open: {
                         'margin-top': [-100,0],
                         opacity: [0,1] 
                     },
                     close: {
                         'margin-top': [0,100],
                         opacity: [1,0] 
                     },
                     options:{
                         transition: Fx.Transitions.Circ.easeOut,
                         duration: 500 
                     }  
                 }  
          });
      });

   }); //end DOMready
</code></pre>
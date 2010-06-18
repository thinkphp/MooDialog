MooDialog.Prompt = new Class({

     Extends: MooDialog,

     options: {

        okText: 'Ok',
        focus: true
     },

     initialize: function(msg,fn,options){

        this.parent(options);
 
         fn = fn ? fn : $empty;

         //create input textfield
         var textInput = new Element('input',{
              type: 'text',
              styles: {
                   width: (this.options.size.width - 70)
              }
         });     

         //create okButton
         var buttonSubmit = new Element('input',{
               type: 'submit',
               value: this.options.okText,
               styles: {
                      width: 40
               } 
         });

         this.setContent(

              new Element('div')

                  .adopt(

                          new Element('p',{
                               'class':'MooDialogPromt',
                               text: msg
                               }
                        ) 

                  ).adopt(
 
                    new Element('form',{

                        'class': 'buttons',
                         events: {
                             submit: function(e) {
                                 if(e) {e.stop();}
                                 fn(textInput.get('value'));
                                 this.close(); 
                             }.bind(this)
                         }  
                    }).adopt(textInput).adopt(buttonSubmit)  
                  )
         ).open();  

         if(this.options.focus) {

            this.addEvent('show',function(){

                 textInput.focus();
            }); 
         }
     } 
});
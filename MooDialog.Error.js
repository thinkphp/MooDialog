MooDialog.Error = new Class({

   Extends: MooDialog,

   options: {
       okText: 'Ok',
       focus: true  
   },

   initialize: function(msg,options) {

         this.parent(options);

         var okButton = new Element('input',{

              type: 'button',

              value: this.options.okText,

              events: {

                     click: function(){
 
                       this.close();

                     }.bind(this)
              }
         });

         this.setContent(

              new Element('div').adopt(

                  new Element('p',{
                                   'class': 'MooDialogError',
                                   text: msg
                                   }
                             )
              ).adopt(

                  new Element('div',{'class':'buttons'}).adopt(okButton) 
              ) 
          
         ).open();


         if(this.options.focus) {

            this.addEvent('show',function(){

                   okButton.focus();
            }) 
         } 
   }
});

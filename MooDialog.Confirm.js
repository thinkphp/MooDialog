/*
---
description:     MooDialog

license:
  - MIT-style license

requires:
  core/1.2.4:   '*'

provides:
  - [MooDialog.Confirm,Element.confirmLinkClick,Element.confirmFormSubmit]
...
*/

MooDialog.Confirm = new Class({

    Extends: MooDialog,

    options: {
       okText: 'Ok',
       cancelText: 'Cancel',
       focus: true
    },

    initialize: function(msg,fn1,fn2,options) {
       this.parent(options);
       fn1 = fn1 ? fn1 : $empty; 
       fn2 = fn2 ? fn2 : $empty;

       var cancelButton = new Element('input',{
                 type: 'button',
                 events: {
                       click: function(){
                              fn2();this.close();
                       }.bind(this)
                 },
                 value: this.options.cancelText
       });


       this.setContent(

           new Element('div').adopt(

                              new Element('p',{'class':'MooDialogConfirm',text: msg})).adopt(

                                            new Element('div',{'class': 'buttons'}).adopt(cancelButton).adopt(

                                                    new Element('input',{type: 'button',

                                                        events: {
                                                              click: function(){
                                                                     fn1();this.close();
                                                              }.bind(this) 
                                                        },
                                                        value: this.options.okText
                                                    })
                                            )
           )
       ).open();  


       if(this.options.focus) {

           this.addEvent('show',function(){

                cancelButton.focus();
           }); 
       } 

    }//end initialize

});



Element.implement({

        confirmLinkClick: function(msg,options) {

              this.addEvent('click',function(e){

                   if(e) {e.stop();}

                   new MooDialog.Confirm(msg,function(){

                       location.href = this.get('href');

                   }.bind(this),null,options)  
              });   

          return this;
        }
});

Element.implement({

        confirmSubmitForm: function(msg,options) {

             this.addEvent('submit',function(e){

                  if(e) {e.stop();}
  
                  new MooDialog.Confirm(msg,function(){

                      this.getElements('input').each(function(elem){

                           if(elem.get('type') == 'submit') {elem.set('type','hidden');}
                      });

                      this.submit();
 
                  }.bind(this),null,options)                  
             });   

          return this;  
        }
});
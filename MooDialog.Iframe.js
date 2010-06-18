MooDialog.Iframe = new Class({

   Extends: MooDialog,

   initialize: function(url,options){

      this.parent(options);

      var options = this.options, optionsSize = options.size;

      this.setContent(

           new Element('iframe',{
               src: url,
               frameborder: 0,
               scrolling: options.useScrollBar ? 'auto' : 'no',
               width: optionsSize.width,
               height: optionsSize.height
           }) 

      ).open();
   } 
});
/*
*  Dandelion App Models File
*/
define(['backbone'], function(Backbone){
  var Article = Backbone.Model.extend({

    defaults: {
      title: '',
      content: '',
      published: false,
      lastEdit: null,
      perma: '/somewhere'
    },

    parseBeforeLocalSave: function(response, options){
      console.log("PARSE BEFORE LOCAL SAVE");
      console.log("Response:", response);
      console.log("---------------");
      console.log("options:", options);
    },

    parse: function(response, options){
      if (response.data) {
        return response.data;
      }
      //return response;
    }

  });

  return Article;
});
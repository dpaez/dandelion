/*
*  Dandelion App Collection File
*/
define(['backbone', 'models/article'], function(Backbone, Article){
  var Articles = Backbone.Collection.extend({
    model: Article,
    url: '/articles',

  });
  return Articles;
});
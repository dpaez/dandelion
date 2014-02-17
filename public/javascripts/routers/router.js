/*
 *  Editors Router.
 */
define(['backbone',
        'utils/view_handler',
        'initial'],
  function( Backbone,
            ViewHandler,
            editorApp){
  var EditorRouter = Backbone.Router.extend({
    routes: {
      'edit/:id': 'editArticle',
      'new': 'newArticle'
    },

    initialize: function(){
      //Prepare router here
      this.viewHandler = new ViewHandler();
      this.viewHandler.initialize({el:'#editor-article'});
    },

    editArticle: function(id){
      var article = editorApp.myArticles.get(id);
      this.viewHandler.show(new editorApp.ArticleView({model:article}));
    },

    newArticle: function(){
      //TBD
    }

  });
  return EditorRouter;
});
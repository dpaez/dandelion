/*
 *  Editors List View
 */

define(['backbone', 'models/articles', 'views/editor_article_preview'],
      function(Backbone, Articles, ArticlePreview){

  var EditorListView = Backbone.View.extend({
  el: '#editor-list',

  initialize: function() {
    //this.collection.fetch();
    this.listenTo( this.collection, 'add', this.renderArticle );
    this.listenTo( this.collection, 'reset', this.render );
  },

  //render all
  render: function() {
    this.collection.each(function( item ) {
      this.renderArticle( item );
    }, this );
  },

  // render an article by creating an ArticleView and appending the
  // element it renders to the article's element
  renderArticle: function( item ) {
    var articleView = new ArticlePreview({
      model: item
    });
    this.$el.append( articleView.render().el );
  }
  });
  return EditorListView;
});
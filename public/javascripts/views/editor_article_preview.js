/*
 *  Editor Article mini (pre)view
 */
define(['backbone'], function(Backbone){
  var ArticlePreview = Backbone.View.extend({
    tagName: 'div',
    className: 'article_mini',
    template: _.template( $( '#editor_article_tpl' ).html() ),

    render: function() {
      this.$el.html( this.template( this.model.toJSON() ) );

      return this;
    }



  });
  return ArticlePreview;
});
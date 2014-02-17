/*
 *  Editors Starter Module
 */
define(['underscore',
        'backbone',
        'bootstrap',
        'models/articles',
        'views/editor_list',
        'views/editor_article_preview',
        'views/editor_main'],
  function( _,
            Backbone,
            InitialData,
            Articles,
            ListView,
            PreviewView,
            ArticleView){
  var Editor = function(){ };
  //var myCollection = new Articles();
  //var router = new Router({articles: myCollection});
  //var listView = new ListView({collection: myCollection});
  //var preView = new PreviewView();
  //var articleView = new ArticleView();
  "use strict";

  _.extend(Editor.prototype, {
    initialize: function(options){
      this.router = options.router || null; //check if router is not undefined

      this.myArticles = new Articles();
      InitialData(this.myArticles);

      this.ListView = ListView;
      this.ArticleView = ArticleView;
      this.PreView = PreviewView;

      this.listView = new this.ListView({collection: this.myArticles});
      this.articleView = new this.ArticleView({model: this.myArticles.at(0)});

    },

    start: function(){
      /*
       * Extremely simple starter function.
       */
      this.listView.render();
      this.articleView.render();
      //show first article or empty article ...
      Backbone.history.start();
    }
  });

  return new Editor();
});

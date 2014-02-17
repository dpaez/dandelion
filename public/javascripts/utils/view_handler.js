/*
 *  View Handler Module
 */
define(['backbone', 'jquery'], function(Backbone, $){
  var ViewHandler = function(){
    "use strict";
    var currentView = null;
    var el = (currentView && currentView.el) ? currentView.el : '';

    var closeView = function (view) {
      if (view && view.close) {
        view.close();
      }
    };

    var openView = function (view) {
      view.render();
      $(el).html(view.el);
      if (view.onShow) {
        view.onShow();
      }
    };

    this.initialize = function(options){
      el = (options && options.el) ? options.el : '';

    };

    this.show = function(view) {

      closeView(currentView);
      currentView = view;
      openView(currentView);
    };

  };
  return ViewHandler;
});
/*
 *  Editors Article's main View
 */
define(['backbone', 'marked'], function(Backbone, marked){
  var EditorView = Backbone.View.extend({
    //el:"#editor-article",
    tagName: 'article',
    template: _.template( $("#editor_edit_tpl").html() ),
    md:false,

    events: {
      "focus .editable": "startEdit",
      "keypress .editing": "saveOnKeyPress",
      "blur .editing": "stopEdit",
      "click #mark-it": "convertAndPreview",
    },

    initialize: function(){
      console.log("Initializing App...");
      this.md = this.prepareMarked();

      //this.listenTo(this.model, "change", this.render);
    },

    prepareMarked: function(){
      //prepare marked
      marked.setOptions({
        gfm: true,
        tables: true,
        breaks: false,
        pedantic: false,
        sanitize: true,
        smartLists: true,
        langPrefix: 'language-',
        highlight: function(code, lang) {
          if (lang === 'js') {
            return highlighter.javascript(code);
          }
          return code;
        }
      });
      console.log(marked('i am using __markdown__.'));
      return marked;
    },

    render: function(){
      this.$el.html( this.template( this.model.toJSON() ) );
      this.$input = this.$('#article-title');
      this.$textarea = this.$('#whitepage');
      return this;
    },

    close: function(){
      this.remove();
    },

    saveOnKeyPress: function(){
      //send save to model
      var title = this.$input.val();
      var content = this.$textarea.val();

      console.log('model: ',this.model);

      this.model.save(
        {
          title: title,
          content: content
        },
        {
          success: function (response) {
            console.log("success: ", response);
            console.log("Last save was on", new Date());
          },
          error: function (model, response) {
            console.log("error: ",response);
          }
        }
      );
    },

    startEdit: function(current){
      var $target = $(current.target);
      $target.addClass('editing');
      console.log($target);
      //$target.focus();
    },

    stopEdit: function(current){
      var $target = $(current.target);
      $target.removeClass('editing');
    },

    convertAndPreview: function(current){
      current.preventDefault();
      var content = this.$textarea.val();
      var parsed = this.md(content);
      console.log("result: ", parsed);
      var preview = this.$('#draft-preview');

      preview.toggleClass('invisible');
      preview.html(parsed);
      return false;
    }


  });

  return EditorView;
});

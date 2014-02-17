/*
 * Dandelion API REST interface.
 */

var editor = require('./editor');

exports.init = function (app){
  /*
   *  GET
   */
  app.get('/', editor.dashboard);

  app.get('/articles', editor.list);

  app.get('/articles/:id', editor.article);


  /*
   *  POST
   */
  app.post('/articles/', editor.create);

  /*
   *  PUT
   */

  app.put('/articles/:id', editor.edit);


  /*
   *  DELETE
   */

  //app.delete('/articles/:id', editor.delete);
};
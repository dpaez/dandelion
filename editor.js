/*
 * Dandelion Web API REST implementation.
 */

var moment = require('moment');
var _ = require('underscore');

/*
 * Temporary (testable) objects
 */

var articles = [
  {
    'id': '1',
    'title': "## a remarkable title 1",
    'content': "__This__ is some quality content. Check it out!",
    'published': false,
    'perma': '1',
    'lastEdit': moment("Apr 30, 2013").format('MMMM Do YYYY, h:mm:ss a')
  },
  {
    'id': '2',
    'title': "## a remarkable title 2",
    'content': " ## Node.js-Based RESTFul services for Employee Directory Sample App ## \
              Built with the Node.js and the [Express framework](http://expressjs.com/). \
              The client application is available in [this repository](https://github.com/ccoenraets/directory-backbone-bootstrap) \
              Refer to [this blog post](http://coenraets.org/blog/2013/04/sample-application-with-backbone-js-and-twitter-bootstrap-updated-and-improved/) for more information about the application. \
              ## Setting Up ## \
              npm install \
              node server.js ",
    'published': false,
    'perma': '2',
    'lastEdit': moment('May 4, 2013').format('MMMM Do YYYY, h:mm:ss a')
  },
];

// DEPRECATED
exports.dashboard = function (req, res, next){
  res.render('drafts', {
    locals:{
      title:'All your articles',
      // data: JSON.stringify(articles)
    }
  });
};

exports.list = function (req, res, next){
  /*
   * Method: GET
   * What: Returns last 10 articles. Can be paginated.
   * Bad Cases:
   *  -
   *
   */

  res.json(articles);
};

exports.article = function (req, res, next){
  /*
   * Method: GET
   * What: Returns article id.
   * Bad Cases:
   *  _ 400 if id is NaN or something weird.
   *  - 404 if does not exist.
   *
   */
  var id = null;
  var article = null;
  id = req.params.id;
  if (!id){
    res.send(400, 'An id is required');
  }
  else{
    article = _(articles).find( function(value) {
      return value.id == id;
    });
  }
  if (article == null){
    res.send(404, ("Article with id: %d does not exist", id));
  }
  res.json(article);
};

exports.create = function (req, res, next){
  /*
   * Method: POST
   * What: Creates a new article iff data is valid.
   * Bad Cases:
   *  - 400 bad params. (check this code error)
   *
   */

  var newArticle = {};
  var title = ( req.params.title ) ? req.params.title : false;
  var content = ( req.params.content ) ? req.params.content : false;

  if ((title) && (content)){
    // a brand new testable article.
    // This is going to change.
    newArticle.id = '3';
    newArticle.title = title;
    newArticle.content = content;
    newArticle.perma = newArticle.id;
    newArticle.published = false;
  }
  else{
    res.send(404, "The article you were looking for is not here :(");
  }

  res.send(200, newArticle);
};

exports.edit = function (req, res, next){
  var article = null;
  var id = (req.params && req.params.id) ? req.params.id : false;

  if (!id){
    //throw error
    res.send(500, "Bad Request, id is missing"); //look for a better code
  }

  //testing
  article = _(articles).find( function(value) {
    return value.id == id;
  });

  article.title = req.body.title;
  article.content = req.body.content;
  article.lastEdit = moment().format('MMMM Do YYYY, h:mm:ss a');
  //article.save() ?
  res.json(200, article);
};
require([ 'routers/router',
          'initial',
          'dualStorage'
        ],
  function( Router,
            editorApp,
            ds
          ) {
  var router = new Router();
  editorApp.initialize({
    'router': router
  });
  editorApp.start();
});
require.config({

  paths:{
    "jquery": "/vendors/jquery/jquery",
    "marked": "/vendors/marked/lib/marked",
    "underscore": "/vendors/underscore-amd/underscore",
    "backbone": "/vendors/backbone-amd/backbone",
    "dualStorage": "/vendors/Backbone.dualStorage-master/backbone.dualstorage"
  },

  shim:{
    "dualStorage": {
      deps: ["backbone"],
      exports: "dualStorage",
    }
  }

});
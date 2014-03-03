require.config({

  paths:{
    "jquery": "../vendors/jquery/dist/jquery",
    "marked": "../vendors/marked/lib/marked",
    "underscore": "../vendors/underscore-amd/underscore",
    "backbone": "../vendors/backbone-amd/backbone",
    "dualStorage": "../vendors/Backbone.dualStorage/backbone.dualstorage.amd"
  },

  // shim:{
  //   "dualStorage": {
  //     deps: ["backbone"],
  //     exports: "dualStorage",
  //   }
  // }

});
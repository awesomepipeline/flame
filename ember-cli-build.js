/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    // Add options here
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  // Materialize.css dist imports
  app.import('bower_components/materialize/dist/css/materialize.css');
  app.import('bower_components/materialize/dist/js/materialize.js');
  
  // Materialize.css font and glyphicons imports
  app.import('bower_components/materialize/font/roboto/Roboto-Regular.woff2', {
    destDir: 'font/roboto'
  });
  app.import('bower_components/materialize/font/roboto/Roboto-Light.woff2', {
    destDir: 'font/roboto'
  });
  app.import('bower_components/materialize/font/roboto/Roboto-Bold.woff2', {
    destDir: 'font/roboto'
  });
  app.import('/bower_components/materialize/font/material-design-icons/Material-Design-Icons.woff2', {
    destDir: 'font/material-design-icons'
  });




  return app.toTree();
};

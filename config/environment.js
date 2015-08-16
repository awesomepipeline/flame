/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'flame',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    // API endpoints customisation
    api: {
      baseUrl: 'http://localhost:3000/api/v1/user/events/',
      invitationUrl: 'http://localhost:3000/api/v1/events/',
      registerUrl: "http://localhost:3000/api/v1/users",
      hostEventUrl: 'http://localhost:4200/events/'
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  // ember-simple-auth configurations
  ENV['simple-auth'] = {
    authorizer: 'simple-auth-authorizer:devise',
    routeAfterAuthentication: 'events',
    routeIfAlreadyAuthenticated: 'events',
    crossOriginWhitelist: ['http://localhost:3000', 'http://envite-orbital.herokuapp.com/']
  };

  ENV['simple-auth-devise'] = {
    serverTokenEndpoint: 'http://localhost:3000/api/v1/auth',
    tokenAttributeName: 'token',
    identificationAttributeName: 'username'
  }

  ENV.contentSecurityPolicy = {
    'default-src': "'none'",
    'script-src': "'self' 'unsafe-inline'",
    'font-src': "'self'",
    'connect-src': "'self' 'unsafe-inline'",
    'img-src': "'self'",
    'style-src': "'self' 'unsafe-inline'",
    'media-src': "'self'"
  }

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.api.baseUrl = 'http://envite-orbital.herokuapp.com/api/v1/user/events/';
    ENV.api.invitationUrl = 'http://envite-orbital.herokuapp.com/api/v1/events/';
    ENV.api.registerUrl = "http://envite-orbital.herokuapp.com/api/v1/users/";
    ENV.api.hostEventUrl = 'http://enviteapp.herokuapp.com/',
    ENV['simple-auth-devise'].serverTokenEndpoint = "http://envite-orbital.herokuapp.com/api/v1/auth";
  }

  return ENV;
};

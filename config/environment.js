/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'fuelup',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    contentSecurityPolicy: {
    'default-src': "'none'",
    'script-src': "'self'",
    'font-src': "'self'",
    'connect-src': "'self' 'localhost:4200'",
    'img-src': "'self'",
    'style-src': "'self' 'localhost:4200' 'unsafe-inline'",
    'media-src': "'self' 'localhost:4200'"
    },

    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }

  };

  if (environment === 'development') {
    ENV.APP.API_HOST = 'http://localhost:8081';
  }

  if (environment === 'production') {
    ENV.APP.API_HOST = 'http://iasc8080-06.ist.unomaha.edu';
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

  return ENV;
};

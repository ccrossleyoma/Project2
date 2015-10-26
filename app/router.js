import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('home', {});
  this.route('auth', {});
  this.route('add-fill-up', {});
  this.route('about', {});
  this.route('register', {});
  this.route('add-vehicle', {});
  this.route('compare', {});
  this.route('archive', {});
});

export default Router;

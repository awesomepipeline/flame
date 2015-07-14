import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('hosting');
  this.route('pending');
  this.route('responded');
  this.route('notifications');
});

export default Router;

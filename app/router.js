import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('events', function() {
    this.route('hosting');
    this.route('notifications');
    this.route('show', { path: ':event_id' });
    this.route('invitation', { path: ':event_id/invitation' });
    this.route('edit', { path: ':event_id/edit' });
    this.route('new');
  });
  
  this.route('login');
  this.route('register');
});

export default Router;

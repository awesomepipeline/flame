import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('events', function() {
    this.route('new');
    this.route('show', { path: ':event_id' });
    this.route('edit', { path: ':event_id/edit' });
    this.route('invitation', { path: ':event_id/invitation' });    
  });

  this.route('invitations', function() {
    this.route('show', { path: ':invitation_id' });
    this.route('suggest', { path: ':invitation_id/suggest' });
    // this.route('suggest', { path: ':invitation_id/suggest' }, function() {
    //   this.route('activity');
    //   this.route('datetime');
    //   this.route('location');
    // });
  });
  
  this.route('login');
  this.route('register');
});

export default Router;

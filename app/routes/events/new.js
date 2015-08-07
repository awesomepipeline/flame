import AuthRoute from 'flame/routes/auth-route';
import Ember from 'ember';
import EventsAdapter from 'flame/adapter/events';

export default AuthRoute.extend({
  adapter: EventsAdapter.create(),

  model: function() {
    return this.get('adapter').newModel();
  },

  setupController(controller, model) {
    controller.set('event', model);
  },

  actions: {
    createEvent(_event) {
      var settings = this.get('adapter').createNewSettings(_event);
      var _this = this;
      return Ember.$.ajax(settings)
        .then(function(_event) {
          _this.transitionTo('events.show', _event);
       });
    }
  }
});




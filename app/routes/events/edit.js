import Ember from 'ember';
import EventsAdapter from 'flame/adapter/events';

export default Ember.Route.extend({
  adapter: EventsAdapter.create(),

  model(params) {
    return this.get('adapter').editModel(params);
  },

  setupController(controller, model) {
    controller.set('event', model);
  },

  actions: {
    // Note to self: the _event is passed in from the event-form component's js file
    // This should end your future confusions.
    updateEvent: function(_event) {
      var settings = this.get('adapter').createUpdateSettings(_event);
      var _this = this;

      return Ember.$.ajax(settings)
        .then(function(_event) {
          _this.transitionTo('events.show', _event);
        })
        .fail(function(res) {
          Object.keys(res.errors).forEach(function(key) {
            errors.add(key, res.errors[0]);
          });
        });
    }
  }
});

// {"errors":{"activity":["can't be blank"],"location":["can't be blank"],"datetime":["cannot be in the past"]}}
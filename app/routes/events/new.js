import AuthRoute from 'flame/routes/auth-route';
import DS from 'ember-data';
import Ember from 'ember';
import EventsAdapter from 'flame/adapter/events';

export default AuthRoute.extend({
  adapter: EventsAdapter.create(),

  model: function() {
    return this.get('adapter').newModel();
  },

  setupController(controller, model) {
    controller.set('event', model);
    controller.set('errors', DS.Errors.create());
  },

  actions: {
    createEvent(_event) {
      // creating a new DS.Error object, not re-using previously created Error object
      var errors = DS.Errors.create();
      var settings = this.get('adapter').createNewSettings(_event);
      var _this = this;

      return Ember.$.ajax(settings)
        .then(function(_event) {
          _this.transitionTo('events.show', _event.id);
        })
        .fail(function(res) {
          var errorsHash = res.responseJSON.errors;

          Object.keys(errorsHash).forEach(function(key) {
            errors.add(key, errorsHash[key][0]);
          });

          // Need to set the property again. There's no automatic binding (I would suspect because this
          // is because the property is defined in Route, not Controller, so need to manually set)
          _this.controllerFor('events.new').set('errors', errors);
        });
    },
  }
});




import AuthRoute from 'flame/routes/auth-route';
import Ember from 'ember';
import EventsAdapter from 'flame/adapter/events';
import DS from 'ember-data';

export default AuthRoute.extend({
  adapter: EventsAdapter.create(),


  model: function() {
    return this.get('adapter').newModel();
  },

  setupController(controller, model) {
    controller.set('event', model);
    controller.set('errors', DS.Errors.create());
  },

  parseToJson: function() {

  },

  actions: {
    createEvent(_event) {
      var errors = this.controllerFor('events.new').get('errors');
      var settings = this.get('adapter').createNewSettings(_event);
      var _this = this;
      return Ember.$.ajax(settings)
        .then(function(_event) {
          _this.transitionTo('events.show', _event);
       })
        .fail(function(res) {
          console.log(res.responseJSON.errors);
          var errorsHash = res.responseJSON.errors;

          Object.keys(errorsHash).forEach(function(key) {
            errors.add(key, errorsHash[key][0]);
            console.log(key, errorsHash[key][0]);
          });
        });
    }
  }
});




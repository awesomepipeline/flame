import AuthRoute from 'flame/routes/auth-route';
import DS from 'ember-data';
import Ember from 'ember';
import InvitationsAdapter from 'flame/adapter/invitations';

export default AuthRoute.extend({
  adapter: InvitationsAdapter.create(),

  model: function(params) {
    console.log(params.invitation_id);
    return this.get('adapter').suggestModel(params.invitation_id);
  },

  setupController: function(controller, model) {
    controller.set('event', model);
    controller.set('errors', DS.Errors.create());
  },

  actions: {
    submitSuggestion: function(type, value, invitationId) {
      console.log(type);
      console.log(value.length);
      console.log(this.get('controller'));

      var errors = DS.Errors.create();

      // Client side validation for this 
      if (type === null) {
        console.log('type fired');
        errors.add("type", "must choose a category");
      }

      if (value.length === 0) {
        console.log('length fire');
        errors.add("value", "cannot be empty");
      }

      this.controllerFor('invitations.suggest').set('errors', errors);

      // Sending request to server
      var settings = this.get('adapter').createSuggestSettings(invitationId, type, value);
      // if (type === "activity") {
      //   // Send the activity request
      //   settings = this.get('adapter').suggestActivity();
      // } else if(type === "time") {
      //   // Send the time request
      //   settings = this.get('adapter').suggestTime();
      // } else {
      //   // Send the location request
      //   settings = this.get('adapter').suggestLocation();
      // } 

      var _this = this;
      return Ember.$.ajax(settings)
        .then(function() {
          _this.transitionTo('invitations.show', invitationId);
        })

    }
  }
});


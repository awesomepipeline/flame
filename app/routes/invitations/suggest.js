import AuthRoute from 'flame/routes/auth-route';
import DS from 'ember-data';
import Ember from 'ember';
import InvitationsAdapter from 'flame/adapter/invitations';

export default AuthRoute.extend({
  adapter: InvitationsAdapter.create(),

  model: function(params) {
    return this.get('adapter').suggestModel(params.invitation_id);
  },

  setupController: function(controller, model) {
    controller.set('event', model);
    controller.set('errors', DS.Errors.create());
  },

  actions: {
    submitSuggestion: function(type, value, invitationId) {
      var errors = DS.Errors.create();

      // Client side validation for this 
      if (type === null) {
        errors.add("type", "must choose a category");
        this.controllerFor('invitations.suggest').set('errors', errors);
        return;
      }

      if (value.length === 0) {
        errors.add("value", "cannot be empty");
        this.controllerFor('invitations.suggest').set('errors', errors);
        return;
      }  

      // Sending request to server
      var settings = this.get('adapter').createSuggestSettings(invitationId, type, value);

      var _this = this;
      return Ember.$.ajax(settings)
        .then(function() {
          _this.transitionTo('invitations.show', invitationId);
          Materialize.toast("Thanks for the suggestion!", 2000);
        })
        .fail(function() {
          errors.add('time', 'please fill up all the fields');
          _this.controllerFor('invitations.suggest').set('errors', errors);
        });

    }
  }
});


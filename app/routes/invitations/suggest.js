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

      // Client side validation for this 
      if (value.length === 0) {

      }

      if (type === "activity") {
        // Send the activity request
        this.get('adapter').suggestActivity();
      } else if(type === "time") {
        // Send the time request
        this.get('adapter').suggestTime();
      } else if (type === "location") {
        // Send the location request
        this.get('adapter').suggestLocation();
      } else {
        // 
      }

    }
  }
});


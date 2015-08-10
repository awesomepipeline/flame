import AuthRoute from 'flame/routes/auth-route';
import Ember from 'ember';
import InvitationsAdapter from 'flame/adapter/invitations';

export default AuthRoute.extend({
  adapter: InvitationsAdapter.create(),

  model: function(params) {
    console.log(params.invitation_id);
    return this.get('adapter').suggestModel(params.invitation_id);
  },

  actions: {
    submitSuggestion: function(type, value, invitationId) {
      console.log(type);
      console.log(value);

      if (type === "activity") {
        // Send the activity request
      } else if(type === "time") {
        // Send the time request
      } else if (type === "location") {
        // Send the location request
      } else {
        // 
      }

    }
  }
});


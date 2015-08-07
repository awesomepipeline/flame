import AuthRoute from 'flame/routes/auth-route';
import Ember from 'ember';
import InvitationsAdapter from 'flame/adapter/invitations';


export default AuthRoute.extend({
  adapter: InvitationsAdapter.create(),

  model: function() {
    return this.get('adapter').indexModel();
  },

  actions: {
    decline: function(invitationId) {
      Materialize.toast("Invite declined :(", 2000);
      var settings = {
        "async": true,
        "crossDomain": true,
        "url": "http://localhost:3000/api/v1/events/" + invitationId + "/reject",
        "method": "GET",
      };

      Ember.$.ajax(settings);
    },

    accept: function(invitationId) {
      Materialize.toast("Invite accepted :)", 2000);
      var settings = {
        "async": true,
        "crossDomain": true,
        "url": "http://localhost:3000/api/v1/events/" + invitationId + "/accept",
        "method": "GET",
      };

      Ember.$.ajax(settings);
    }
  }
});

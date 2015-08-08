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
      var settings = this.get('adapter').createResponseSettings(invitationId, "reject");

      Ember.$.ajax(settings);
    },

    accept: function(invitationId) {
      Materialize.toast("Invite accepted :)", 2000);
      var settings = this.get('adapter').createResponseSettings(invitationId, "accept");

      Ember.$.ajax(settings);
    }
  }
});

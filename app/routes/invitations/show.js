import AuthRoute from 'flame/routes/auth-route';
import config from 'flame/config/environment';
import Ember from 'ember';
import InvitationsAdapter from 'flame/adapter/invitations';

export default AuthRoute.extend({
  adapter: InvitationsAdapter.create(),

  activate: function() {
    // Force tabs to refresh
    $('ul.tabs').tabs();
    this._super.apply(this, arguments);
  },

  model: function(params) {
    return this.get('adapter').showModel(params.invitation_id);
  },

  actions: {
    decline: function(invitationId) {
      Materialize.toast("Invite declined :(", 2000);
      var settings = this.get('adapter').createResponseSettings(invitationId, "reject");

      var _this = this;
      Ember.$.ajax(settings).then(function() {
        _this.refresh();
      });
    },

    accept: function(invitationId) {
      Materialize.toast("Invite accepted :)", 2000);
      var settings = this.get('adapter').createResponseSettings(invitationId, "accept");

      var _this = this;
      Ember.$.ajax(settings).then(function() {
        _this.refresh();
      });
    }
  }
});


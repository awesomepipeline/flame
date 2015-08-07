import AuthRoute from 'flame/routes/auth-route';
import Ember from 'ember';
import InvitationsAdapter from 'flame/adapter/invitations';

export default AuthRoute.extend({
  activate: function() {
    // Force tabs to refresh
    $('ul.tabs').tabs();
  },

  model: function(params) {
    var _this = this;

    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "http://localhost:3000/api/v1/user/events/" + params.invitation_id,
      "method": "GET",
    };   

    var invitationSettings = {
      "async": true,
      "crossDomain": true,
      "url": "http://localhost:3000/api/v1/events/" + params.invitation_id + "/responses",
      "method": "GET",
    };

    return Ember.RSVP.hash({
      eventDetails: Ember.$.ajax(settings),
      invitationDetails: Ember.$.ajax(invitationSettings)
    });
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

      var _this = this;
      Ember.$.ajax(settings).then(function() {
        _this.refresh();
      });
    },

    accept: function(invitationId) {
      Materialize.toast("Invite accepted :)", 2000);
      var settings = {
        "async": true,
        "crossDomain": true,
        "url": "http://localhost:3000/api/v1/events/" + invitationId + "/accept",
        "method": "GET",
      };

      var _this = this;
      Ember.$.ajax(settings).then(function() {
        _this.refresh();
      });
    }
  }
});


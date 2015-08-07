import Ember from 'ember';
import AuthRoute from '../auth-route';

export default AuthRoute.extend({
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
      Materialize.toast("Event declined :(", 2000);
      var settings = {
        "async": true,
        "crossDomain": true,
        "url": "http://localhost:3000/api/v1/events/" + invitationId + "/reject",
        "method": "GET",
      };

      Ember.$.ajax(settings);
      this.refresh();
    },

    accept: function(invitationId) {
      Materialize.toast("Event accepted :)", 2000);
      var settings = {
        "async": true,
        "crossDomain": true,
        "url": "http://localhost:3000/api/v1/events/" + invitationId + "/accept",
        "method": "GET",
      };

      Ember.$.ajax(settings);
      this.refresh();
    }
  }
});


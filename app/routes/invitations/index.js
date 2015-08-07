import Ember from 'ember';
import AuthRoute from '../auth-route';

export default AuthRoute.extend({
  model: function() {
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "http://localhost:3000/api/v1/user/events/invited",
      "method": "GET",
    };

    return Ember.$.ajax(settings);
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
    }
  }
});

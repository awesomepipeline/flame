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
});


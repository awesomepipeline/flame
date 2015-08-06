import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var requestUrl = "http://localhost:3000/api/v1/events/" + params.event_id +  "/notification";
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": requestUrl,
      "method": "GET",
    };
    var _this = this;

    // TODO: transition to invitations/:invitation_id when the structure is set up
    return Ember.$.ajax(settings).done(function(response) {
      console.log(response);
      _this.transitionTo('events.notifications');
    }).fail(function() {
      _this.transitionTo('events.notifications');
    });
  }
});
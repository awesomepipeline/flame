import Ember from 'ember';

export default Ember.Route.extend({
  // model(params) {
  //   return this.store.findRecord('event', params.event_id);
  // },
  model: function(params) {
    var eventId = this.modelFor('events.show').get('id');
    var requestUrl = "http://localhost:3000/api/v1/events/" + eventId +  "/notification"
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": requestUrl,
      "method": "GET",
    };

    console.log(eventId);
    console.log(requestUrl);

    // var _this = this;
    // return Ember.$.ajax(settings).then(function() {
    //   _this.transitionTo('events.notifications');
    // });

    Ember.$.ajax(settings).done(function (response) {
      console.log(response);
      return response;
    });
  }
});

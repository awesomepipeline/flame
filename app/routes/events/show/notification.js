import Ember from 'ember';

export default Ember.Route.extend({
  // model: function(params) {
  //   var eventId = this.modelFor('events.show').get('id');
  //   var requestUrl = "http://localhost:3000/api/v1/events/" + eventId +  "/notification"
  //   var settings = {
  //     "async": true,
  //     "crossDomain": true,
  //     "url": requestUrl,
  //     "method": "GET",
  //   };

  //   console.log(eventId);
  //   console.log(requestUrl);

  //   // var _this = this;
  //   // return Ember.$.ajax(settings).then(function(_event) {
  //   //   _this.transitionTo('events.show', _event);
  //   // });

  //   return Ember.$.ajax(settings).done(function (response) {
  //     console.log(response);
  //     return response;
  //   });
  // }

  activate: function() {
    var eventId = this.modelFor('events.show').get('id');
    var requestUrl = "http://localhost:3000/api/v1/events/" + eventId +  "/notification"
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": requestUrl,
      "method": "GET",
    };
    console.log(requestUrl);
    // return Ember.$.ajax(settings);
  }

});

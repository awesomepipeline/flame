import Ember from 'ember';
import moment from 'moment';

export default Ember.Route.extend({
  // model(params) {
  //   return this.store.findAll('event', params.event_id);
  // },

  // Hand Rolled Model
  model(params) {
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "http://localhost:3000/api/v1/user/events/" + params.event_id,
      "method": "GET",
    };

    //return the promise on model hook. This makes the transition halt until the promise is resolved
    return Ember.$.ajax(settings).then(function(res) {
      let data = {};
      data.id = res.id;
      data.activity = res.activity;
      data.datetime = res.datetime;
      data.date = moment(res.datetime).format("YYYY-MM-DD");
      data.time = moment(res.datetime).format("hh:mm")
      data.location = res.location;
      data.description = res.description;
      
      return data;
    })
  },

  setupController(controller, model) {
    controller.set('event', model);
  },

  actions: {
    // updateEvent: function(_event) {
    //   console.log("Edit action: this is bubbled to me");
    //   var _this = this;
    //   _event.save().then(function(_event) {
    //     console.log(_event);
    //     _this.transitionTo('events.show', _event);
    //   });
    // }

    updateEvent: function(_event) {
      var settings = {
        "async": true,
        "crossDomain": true,
        "url": "http://localhost:3000/api/v1/user/events/" + _event.id,
        "method": "PUT",
        "dataType": 'json',
        "data": {
          "event": {
            "activity": _event.activity,
            "datetime": _event.date + " " + _event.time,
            "location": _event.location,
            "description": _event.description
          }
        }
      };
      var _this = this;
      return Ember.$.ajax(settings).then(function(_event) {
        _this.transitionTo('events.show', _event);
      });
    }
  }
});

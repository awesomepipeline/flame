import Ember from 'ember';
import AuthRoute from '../auth-route';
import moment from 'moment';

export default AuthRoute.extend({
  model: function() {
    return { 
      activity: '',
      date: moment().format('YYYY-MM-DD'),
      time: '00:00',
      location: '',
      description: ''
    };
  },

  setupController(controller, model) {
    controller.set('event', model);
  },

  actions: {
    createEvent(_event) {
      console.log('New event: hey this is bubbled to me, i should do something!');
      console.log(_event.datetime);
      console.log(_event.activity);

      var settings = {
        "async": true,
        "crossDomain": true,
        "url": "http://localhost:3000/api/v1/user/events/",
        "method": "POST",
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
      return Ember.$.ajax(settings)
        .then(function(_event) {
          _this.transitionTo('events.show', _event);
       });
    }
  }
});




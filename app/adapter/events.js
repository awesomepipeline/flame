import Ember from 'ember';
import moment from 'moment';

export default Ember.Object.extend({
  
  baseUrl: 'http://localhost:3000/api/v1/user/events/',  

  indexModel: function() {
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": this.get('baseUrl'),
      "method": "GET",
    };
    return Ember.$.ajax(settings);
  },

  newModel: function() {
    return {
      activity: '',
      date: moment().format('YYYY-MM-DD'),
      time: '00:00',
      location: '',
      description: ''
    };
  },

  showModel: function(params) {
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "http://localhost:3000/api/v1/user/events/" + params.event_id,
      "method": "GET",
    };
    return Ember.$.ajax(settings);
  },

  editModel: function(params) {
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "http://localhost:3000/api/v1/user/events/" + params.event_id,
      "method": "GET",
    };

    console.log(params.event_id);

    return Ember.$.ajax(settings).then(function(res) {
      let data = {};
      data.id = res.id;
      data.activity = res.activity;
      data.datetime = res.datetime;
      data.date = moment(res.datetime).format("YYYY-MM-DD");
      data.time = moment(res.datetime).format("hh:mm");
      data.location = res.location;
      data.description = res.description;
      
      // Return statement is important!
      return data;
    });
  },

  // It's named _event because I want to avoid confusion with Javascript's event (keyword?)
  createNewSettings: function(_event) {
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
    return settings;
  },


  createUpdateSettings: function(_event) {
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
    return settings;
  },

  createInvitationSettings: function(params) {
    var requestUrl = "http://localhost:3000/api/v1/events/" + params.event_id +  "/notification";
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": requestUrl,
      "method": "GET",
    };
    return settings;
  }


});


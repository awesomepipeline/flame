import Ember from 'ember';
import moment from 'moment';

export default Ember.Object.extend({  
  baseUrl: 'http://localhost:3000/api/v1/user/events/',

  // For generating settings that use a HTTP GET request
  getSettings: function(args) {
    var url;
    (args === undefined) ? url = this.get('baseUrl') : url = this.get('baseUrl') + args;

    var settings = {
      "async": true,
      "crossDomain": true,
      "url": url,
      "method": "GET",
    };
    
    return settings;
  },  

  // For generating settings that use either HTTP POST or PUT request (I know it's a misnomer...)
  postSettings: function(_event, verb) {
    var url = this.get('baseUrl');
    if (verb === "PUT") {
      url = url + _event.id;
    }  

    // If in the future you get confused over why this is a form-data request,
    // check http://api.jquery.com/jquery.ajax/ and refer to sections
    // "contentType" and "data" and also http://api.jquery.com/jQuery.param/
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": url,
      "method": verb,
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

  indexModel: function() {
    var settings = this.getSettings();
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
    var settings = this.getSettings(params.event_id);    
    return Ember.$.ajax(settings);
  },

  editModel: function(params) {
    var settings = this.getSettings(params.event_id); 

    return Ember.$.ajax(settings).then(function(res) {
      // Data transformation
      let data = {};
      data.id = res.id;
      data.activity = res.activity;
      data.datetime = res.datetime;
      data.date = moment(res.datetime).format("YYYY-MM-DD");
      data.time = moment(res.datetime).format("HH:mm");
      data.location = res.location;
      data.description = res.description;
      
      // Return statement is important!
      return data;
    });
  },

  // It's named _event because I want to avoid confusion with Javascript's event (keyword?)
  createNewSettings: function(_event) {
    return this.postSettings(_event, "POST");
  },

  createUpdateSettings: function(_event) {
    return this.postSettings(_event, "PUT");
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


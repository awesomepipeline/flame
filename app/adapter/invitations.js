import config from 'flame/config/environment';
import Ember from 'ember';

export default Ember.Object.extend({
  baseUrl: config.api.baseUrl,
  invitationUrl: config.api.invitationUrl,

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

  indexModel: function() {
    var settings = this.getSettings("invited");
    return Ember.$.ajax(settings);
  },

  showModel: function(invitationId) {
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": this.get('baseUrl') + invitationId,
      "method": "GET",
    };   

    var invitationSettings = {
      "async": true,
      "crossDomain": true,
      "url": this.get('invitationUrl') + invitationId + "/responses",
      "method": "GET",
    };

    return Ember.RSVP.hash({
      eventDetails: Ember.$.ajax(settings),
      invitationDetails: Ember.$.ajax(invitationSettings)
    });
  },

  suggestModel: function(invitationId) {
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": this.get('baseUrl') + invitationId,
      "method": "GET",
    };  

    return Ember.$.ajax(settings);
  },

  createResponseSettings: function(invitationId, type) {
    var url = this.get('invitationUrl') + invitationId + "/" + type;
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": url,
        "method": "GET",
    };
    return settings;
  },

  createSuggestSettings: function(invitationId, type, value) {
    var url = this.get('invitationUrl') + invitationId + "/" + type;

    // Ugly fix to transform data
    var keyArr = ["suggested_activity", "suggested_datetime", "suggested_location"];
    var notificationKey;
    if (type === "suggest_activity") {
      notificationKey = keyArr[0];
    } else if (type === "suggest_datetime") {
      notificationKey = keyArr[1];
    } else {
      notificationKey = keyArr[2];
    }


    var settings = {
        "async": true,
        "crossDomain": true,
        "url": url,
        "method": "POST",
        "data": {
          "notification": {
            [notificationKey]: value
          }
        }
    };
    return settings;
  }
}); 
import Ember from 'ember';

export default Ember.Object.extend({
  baseUrl: 'http://localhost:3000/api/v1/user/events/',
  invitationUrl: 'http://localhost:3000/api/v1/events/',

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
  }
}); 
import Ember from 'ember';
import moment from 'moment';

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
}); 
import Ember from 'ember';
import AuthRoute from '../auth-route';

export default AuthRoute.extend({
  model: function() {
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "http://localhost:3000/api/v1/user/events",
      "method": "GET",
    };

    return Ember.$.ajax(settings);
  },  
});

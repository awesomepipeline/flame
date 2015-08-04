import AuthRoute from './auth-route';

export default AuthRoute.extend({
  model: function() {
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "http://localhost:3000/api/v1/user/events/invited",
      "method": "GET",
    };

    return Ember.$.ajax(settings);

    Ember.$.ajax(settings).done(function (response) {
      console.log(response);
      return response;
    });
  }
});

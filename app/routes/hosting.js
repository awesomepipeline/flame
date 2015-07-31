import AuthRoute from './auth-route';

export default AuthRoute.extend({
  // model: function() {
  //   var settings = {
  //     "async": true,
  //     "crossDomain": true,
  //     "url": "http://localhost:3000/api/v1/user/events",
  //     "method": "GET",
  //     "headers": {
        // "authorization": "Token token=\"zFv7vEy55ZD7cnbos1wV\",  username=\"tester1\""
  //     }
  //   }

  //   Ember.$.ajax(settings).done(function (response) {
  //     console.log(response);
  //   });
  // }

  model() {
    this.store.findAll('event');
  }
});

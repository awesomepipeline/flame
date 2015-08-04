import Ember from 'ember';
import AuthRoute from './auth-route';

export default AuthRoute.extend({
  model: function() {
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "http://localhost:3000/api/v1/user/events",
      "method": "GET",
    };

    return Ember.$.ajax(settings);

    // Ember.$.ajax(settings).done(function (response) {
    //   console.log(response);
    //   return response;
    // });

    // return this.store.findAll('event');
  },

  actions: {
    delete(event) {
      console.log('the event is passed to the hosting route!');
      console.log(event);
    
      var eventToDelete = this.store.findRecord('event', event.id).then(function(post) {
        post.destroyRecord();
      })
      return false;
    }
  }
  
});

import Ember from 'ember';
import AuthRoute from './auth-route';

export default AuthRoute.extend({
  model: function(params) {
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "http://localhost:3000/api/v1/user/events/" + params.event_id,
      "method": "GET",
    };
    return Ember.$.ajax(settings);
  },

  deactivate: function() {
    // var currentModel = this.modelFor('events.show');
    // var currentUser = this.get('session.content.secure.username');

    // console.log(currentModel);
    // // console.log(currentModel.get('host').username);
    // console.log(this.get('session.content.secure.username'));


    // this.store.deleteRecord(this.modelFor('events.show'));
  }
});

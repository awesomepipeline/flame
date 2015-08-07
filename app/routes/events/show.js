import EventsAdapter from 'flame/adapter/events';
import AuthRoute from 'flame/routes/auth-route';

export default AuthRoute.extend({
  adapter: EventsAdapter.create(),

  model: function(params) {
    return this.get('adapter').showModel(params);
  },

  // deactivate: function() {
  //   var currentModel = this.modelFor('events.show');
  //   var currentUser = this.get('session.content.secure.username');

  //   console.log(currentModel);
  //   // console.log(currentModel.get('host').username);
  //   console.log(this.get('session.content.secure.username'));


  //   this.store.deleteRecord(this.modelFor('events.show'));
  // }
});


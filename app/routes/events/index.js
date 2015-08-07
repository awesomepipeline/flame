import EventsAdapter from 'flame/adapter/events';
import AuthRoute from 'flame/routes/auth-route';

export default AuthRoute.extend({
  adapter: EventsAdapter.create(),

  model: function() {
    return this.get('adapter').indexModel();
  },  
});

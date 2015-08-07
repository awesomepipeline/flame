import AuthRoute from 'flame/routes/auth-route';
import EventsAdapter from 'flame/adapter/events';

export default AuthRoute.extend({
  adapter: EventsAdapter.create(),

  model: function() {
    return this.get('adapter').indexModel();
  },  
});

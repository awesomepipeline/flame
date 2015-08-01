import AuthRoute from './auth-route';

export default AuthRoute.extend({
  model() {
    this.store.findAll('event');
  }
});

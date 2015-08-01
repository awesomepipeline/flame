import AuthRoute from './auth-route';

export default AuthRoute.extend({
  model() {
    return this.store.createRecord('event');
  },
  deactivate() {
    this.controller.set('errorMessage', '');
  },
});

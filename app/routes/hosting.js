import AuthRoute from './auth-route';

export default AuthRoute.extend({
  model: function() {
    return ['cow', 'joke', 'moo'];
  }
});

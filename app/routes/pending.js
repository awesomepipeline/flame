import AuthRoute from './auth-route';
import Base from 'simple-auth/stores/base';

export default AuthRoute.extend({
  beforeModel: function() {
    console.log(localStorage);
  }
});

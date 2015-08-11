import Ember from 'ember';
import LoginControllerMixin from 'simple-auth/mixins/login-controller-mixin';

export default Ember.Controller.extend(LoginControllerMixin, {
  authenticator: 'simple-auth-authenticator:devise',
  
  // Just a simple error property, there's no need to use DS.Errors because 
  // the error message is not an array. It's just a message
  error: '',

  actions: {
    authenticate: function() {
      // identification and password are the defauls for ember simple auth
      var data = this.getProperties('identification', 'password');
      var _this = this;

      this.get('session').authenticate(this.get('authenticator'), data)
        .fail(function(res) {
          _this.set('error', res.error);
        });
    }
  }
});
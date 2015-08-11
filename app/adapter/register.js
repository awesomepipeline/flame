import config from'flame/config/environment';
import Ember from 'ember';

export default Ember.Object.extend({
  registerUrl: config.api.registerUrl,

  createRegisterSettings: function(controller) {
    var settings = {
      url: this.get('registerUrl'),
      type: 'POST',
      dataType: 'json',
      data: {
        'user': {
          'username': controller.get('username'),
          'fullname': controller.get('displayname'),
          'password': controller.get('password'),
          'password_confirmation': controller.get('passwordConfirm')
        }
      }
    }

    return settings;
  }
});
import Ember from 'ember';

export default Ember.Controller.extend({
  errorMessage: '',
  actions: {
    registerUser: function() {
      var _this = this;
      console.log('registering user');

      var settings = {
        url: 'http://localhost:3000/api/v1/users', // the url is wrong, need to get from chunqi
        type: 'POST',
        dataType: 'json',
        data: {
          'user': {
            'username': this.get('username'),
            'fullname': this.get('displayname'),
            'password': this.get('password'),
            'password_confirmation': this.get('passwordConfirm')
          }
        }
      }
      
      Ember.$.ajax(settings)
        .done(function(res) {
          _this.transitionToRoute('login');
        })
        .fail(function(res) {
          console.log(res);
          console.log(res.responseText);
        });
    }
  }
});

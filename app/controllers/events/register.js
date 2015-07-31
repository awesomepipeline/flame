import Ember from 'ember';

export default Ember.Controller.extend({
  errorMessage: '',
  actions: {
    registerUser: function() {
      var self = this;
      console.log('registering user');
      Ember.$.ajax({
        headers: {
          'X-Transaction': 'POST Example',
          'X-CSRF-Token': Ember.$('meta[name="csrf-token"]').attr('content')
        },
        url: 'users', // the url is wrong, need to get from chunqi
        type: 'POST',
        dataType: 'json',
        data: {
          'user': {
            'email': this.get('email'),
            'password': this.get('password')
            // password_confirmation: this.get('password')
          }
        },
        success: function(msg) {
          console.log('success!');
          console.log(msg.responseText);
          self.set('email', '');
          self.set('password', '');
          self.transitionToRoute('login');
        },
        error: function(msg) {
          console.log('failure');
          console.log(msg.responseText);
          self.set('errorMessage', 'please dont be a pleb');
          return false;
          // self.transitionToRoute('login');
        }        
      });
    }
  }
});

import Ember from 'ember';
import RegisterAdapter from 'flame/adapter/register';

export default Ember.Controller.extend({
  errorMessage: '',
  adapter: RegisterAdapter.create(),

  actions: {
    registerUser: function() {
      var _this = this;
      var settings = this.get('adapter').createRegisterSettings(this);
      
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

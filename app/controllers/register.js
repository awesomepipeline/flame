import Ember from 'ember';
import DS from 'ember-data';
import RegisterAdapter from 'flame/adapter/register';

export default Ember.Controller.extend({
  adapter: RegisterAdapter.create(),
  errors: DS.Errors.create(),

  actions: {
    registerUser: function() {
      var _this = this;
      var settings = this.get('adapter').createRegisterSettings(this);
      
      Ember.$.ajax(settings)
        .done(function(res) {
          _this.transitionToRoute('login');
        })
        .fail(function(res) {
          var errors = DS.Errors.create();
          var errorsHash = res.responseJSON.errors;
          Object.keys(errorsHash).forEach(function(key) {
            errors.add(key, errorsHash[key][0]);
          });

          _this.set('errors', errors);
        });
    }
  }
});

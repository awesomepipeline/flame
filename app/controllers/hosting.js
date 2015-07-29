import Ember from 'ember';

export default Ember.Controller.extend({
  sessionKey: Ember.$.parseJSON(localStorage["ember_simple_auth:session"])["secure"]["auth_token"]
});

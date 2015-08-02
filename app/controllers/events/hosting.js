import Ember from 'ember';

export default Ember.Controller.extend({
  sessionKey: Ember.$.parseJSON(localStorage["ember_simple_auth:session"])["secure"]["token"],
  username: Ember.$.parseJSON(localStorage["ember_simple_auth:session"])["secure"]["username"],
});

import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return ['cow', 'joke', 'moo'];
  }
});

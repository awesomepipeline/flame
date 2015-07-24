import Ember from 'ember';

export default Ember.Route.extend({
  afterModel: function() {
    if (this.session.isAuthenticated) {
      this.transitionTo('hosting');
    }
  }
});

import Ember from 'ember';

export default Ember.Component.extend({
  buttonLabel: function() {
    return (this.get('event').id) ? 'Update Event' : 'Create Event';
  }.property(),
  actions: {
    submit() {
      // Single event, hence this.sendAction('action', ...)
      this.sendAction('action', this.get('event'));
    }
  }
});

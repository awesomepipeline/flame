import Ember from 'ember';

export default Ember.Component.extend({
  buttonLabel: function() {
    return (this.get('event').id) ? 'Update Event' : 'Create Event';
  }.property(),  

  actions: {
    submit() {
      // Single event, hence this.sendAction('action', ...)
      // this.get('event') gets all the filled in stuff, because in the .hbs
      // the input values are populated with event.property. There's data
      // binding going on that's why.
      this.sendAction('action', this.get('event'));
    }
  }
});

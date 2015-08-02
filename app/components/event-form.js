import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    submit() {
      // Single event, hence this.sendAction('action', ...)
      console.log('component debugging');
      console.log(this.get('event.activity'));
      this.sendAction('action', this.get('event'));
    }
  }
});

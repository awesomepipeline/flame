import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(event) {
      console.log('delete is called from the component!');
      console.log(event);
      // deleteEvent is something passed in to the component when it was instantiated
      this.sendAction('deleteEvent', event);
    }
  }
});

import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(event) {
      console.log('delete is called from the component!');
      console.log(event);
      this.sendAction('deleteEvent', event);
    }
  }
});

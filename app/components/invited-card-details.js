import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    decline: function() {
      this.sendAction('decline', this.get('card-data.id'));
    },

    accept: function() {
      this.sendAction('accept', this.get('card-data.id'));
    }
  }
});

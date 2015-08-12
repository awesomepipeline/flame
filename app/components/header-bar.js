import Ember from 'ember';

export default Ember.Component.extend({
  didRender() {
    $('ul.tabs').tabs();
    $(".button-collapse").sideNav();
  },

  actions: {
    invalidateSession() {
      this.sendAction('action');
    }
  }
});

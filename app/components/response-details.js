import Ember from 'ember';

export default Ember.Component.extend({
  didRender() {
    $('.collapsible').collapsible({
      accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    });
  }
});

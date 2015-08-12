import Ember from 'ember';

export default Ember.Component.extend({
  didRender() {

  $('ul.tabs').tabs();
  console.log('this is fired');
  
  $(".button-collapse").sideNav();
  }
});

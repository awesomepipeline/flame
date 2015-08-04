import Ember from 'ember';

export default Ember.Route.extend({
  // model(params) {
  //   return this.store.findAll('event', params.event_id);
  // }
  setupController: function(controller, model) {
    controller.set('event', model);
  },

  actions: {
    updateEvent: function(_event) {
      console.log("Edit action: this is bubbled to me");
      var _this = this;
      _event.save().then(function(_event) {
        console.log(_event);
        _this.transitionTo('events.show', _event);
      });
    }
  }
});

import AuthRoute from './auth-route';

export default AuthRoute.extend({
  // model() {
  //   return this.store.createRecord('event');
  // },
  model() {
    // return { 
    //   // activity: 'default activity',
    //   // datetime: '2015-08-30T00:00:00.000+08:00',
    //   // location: 'default location',
    //   // description: 'default description',

    //   activity: '',
    //   datetime: '2015-08-30T00:00:00.000+08:00',
    //   location: '',
    //   description: ''
    // }
    return this.store.createRecord('event');
  },
  setupController(controller, model) {
    controller.set('event', model);
  },
  actions: {
    createEvent(_event) {
      console.log('hey this is bubbled to me, i should do something!');
      console.log(_event.datetime);

      var _this = this;
      _event.save().then(function() {
        _this.transitionTo('events.show', _event)
      });
    }
  }
});

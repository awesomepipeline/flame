import Ember from 'ember';

export default Ember.Controller.extend({
  // isValid: Ember.computed(
  //   'model.activity',
  //   'model.location',
  //   'model.description',
  //   {
  //     get() {
  //       return !Ember.isEmpty(this.get('model.activity')) &&
  //         !Ember.isEmpty(this.get('model.location')) &&
  //         !Ember.isEmpty(this.get('model.description'));
  //     }
  //   }
  // ),
  // actions: {
  //   save() {
  //     // if (this.get('isValid')) {
  //     //   this.set('errorMessage', '');
  //     //   console.log(this.get('model'));
  //     //   this.get('model').save();
  //     // } else {
  //     //   this.set('errorMessage', 'You have to fill in all the required fields!');
  //     // }
  //     this.get('model').save();
  //   },
  //   cancel() {
  //     this.transitionTo('events.hosting');
  //     return false;
  //   }
  // }
});

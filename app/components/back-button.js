import Ember from 'ember';

export default Ember.Component.extend({
  buttonLabel: function() {
    if (this.get('type') === "events") {
      return "Back to Events";
    } else {
      return "Back to Invitations";
    }
  }.property(),

  isEventsRoute: function() {
    if (this.get('type') === 'events') {
      return true;
    } else {
      return false;
    }
  }.property(),

  clown: "hello"
});

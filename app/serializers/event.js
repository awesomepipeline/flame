import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  // Holy cow I got this to work -.-
  // Ember data expects a ROOT OBJECT, instead of raw JSON
  // Hence {event: [{response}]} instead of just {response}, which is what server is sending back
  extractSingle: function(store, typeClass, payload, id) {
    // rooting the payload in event
    payload = { event: [payload] };
    return this._super(store, typeClass, payload, id);
  }
});

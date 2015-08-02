import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  // Holy cow I got this to work -.-
  // Ember data expects a root object, instead of raw JSON
  // Hence {event: [{response}]} instead of just {response}
  extractSingle: function(store, typeClass, payload, id) {
    payload = { event: [payload] };
    return this._super(store, typeClass, payload, id);
  }
});

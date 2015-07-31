import DS from 'ember-data';

export default DS.Model.extend({
  activity: DS.attr('string'),
  datetime: DS.attr('date'),
  description: DS.attr('string'),
  host: DS.attr('number'),
  created_at: DS.attr('date')
});

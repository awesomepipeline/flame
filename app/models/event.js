import DS from 'ember-data';

export default DS.Model.extend({
  activity: DS.attr('string'),
  datetime: DS.attr('string', {defaultValue: '2015-08-30T00:00:00.000+08:00'}),
  location: DS.attr('string'),
  description: DS.attr('string'),
  host: DS.attr('number'),
  created_at: DS.attr('date'),
});

import DS from 'ember-data';
import moment from 'moment';

export default DS.Model.extend({
  activity: DS.attr('string'),
  datetime: DS.attr('string', {defaultValue: moment()}),
  location: DS.attr('string'),
  description: DS.attr('string'),
  host: DS.attr('number'),
  created_at: DS.attr('date'),
});

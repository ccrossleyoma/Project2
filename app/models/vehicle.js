import DS from 'ember-data';

export default DS.Model.extend({
  year: DS.attr('number'),
  make: DS.attr('string'),
  model: DS.attr('string'),
  trim: DS.attr('string'),
  user: DS.belongsTo('user')
});

import DS from 'ember-data';

export default DS.Model.extend({
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  username: DS.attr('string'),
  vehicle: DS.hasMany('vehicle'),
  fillup: DS.hasMany('fillup')
});

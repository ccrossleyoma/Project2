import DS from 'ember-data';

export default DS.Model.extend({
  date: DS.attr('date'),
  miles: DS.attr('number'),
  gallons: DS.attr('number'),
  pricePerGallon: DS.attr('number'),
  /*user: DS.belongsTo('user', {async: true}),*/
  vehicle: DS.belongsTo('vehicle', {async: true})
});

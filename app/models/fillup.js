import DS from 'ember-data';

export default DS.Model.extend({
  date: DS.attr('date'),
  miles: DS.attr('number'),
  gallons: DS.attr('number'),
  pricePerGallon: DS.attr('number'),
  user: DS.belongsTo('user', {async: true}),
  vehicle: DS.belongsTo('vehicle', {async: true})
}).reopenClass({
	FIXTURES: [
	{
		id: 1,
		date: '2015-07-06',
		miles: 315.4,
		gallons: 10.2,
		pricePerGallon: 2.459,
		user: 1,
		vehicle: 1
	}]
});

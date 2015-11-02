import DS from 'ember-data';

export default DS.Model.extend({
  year: DS.attr('number'),
  make: DS.attr('string'),
  model: DS.attr('string'),
  trim: DS.attr('string'),
  user: DS.belongsTo('user', {async: true}),
  fillups: DS.hasMany('fillup', {async: true})
}).reopenClass({
	FIXTURES: [
	{
		id: 1,
		year: 2015,
		make: 'Toyota',
		model: 'Camry',
		trim: 'XLE',
		user: 1,
		fillups: [1,2]
	}]
});



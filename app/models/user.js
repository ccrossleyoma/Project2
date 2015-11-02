import DS from 'ember-data';

export default DS.Model.extend({
  username: DS.attr('string'),
  password: DS.attr('string'),
  vehicles: DS.hasMany('vehicle'),
  fillups: DS.hasMany('fillup')
}).reopenClass({
	FIXTURES: [
	{
		id: 1,
		username: 'Colby',
		vehicles: [1],
		fillups: [1,2]
	}]
});

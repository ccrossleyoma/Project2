import Ember from 'ember';

export default Ember.Component.extend({
	car: null,
	actions: {
		add: function(){
			var car = this.get('car');
			var auth = this.get('authControllerChild');
			car.set('year', car.get('year'));
			car.set('make', car.get('make'));
			car.set('model', car.get('model'));
			car.set('trim', car.get('trim'));
			car.set('user', auth.get('username'));
			car.save();
			console.log('Added new vehicle to user');
		}
	}
});

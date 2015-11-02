import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		addCar() {
			var vehicleYear = this.get('year');
			var brand = this.get('make');
			var modelName = this.get('model');
			var trimLevel = this.get('trim');
			/*var uName = this.get('username');*/

			//Make sure all fields are filled, otherwise complain to the user
			if((vehicleYear === undefined) || (brand === undefined) || (modelName === undefined) || (trimLevel === undefined) /*|| (uName === undefined)*/) {
				alert("Please complete all fields!");
			}

			//make sure vehicle year is between 1900 and 2016, otherwise complain to the user
			else if((vehicleYear < 1900) || (vehicleYear > 2016)){
				alert("Please enter a valid year between 1900 and 2016!");
			}

			//Go ahead and create new record of vehicle
			else {
				var car = this.store.createRecord('vehicle',{
					year: vehicleYear,
					make: brand,
					model: modelName,
					trim: trimLevel
				});

				car.save();

				console.log('new vehicle added');
				alert("Success, new vehicle was added!");
				this.transitionTo('home');
			}
		}
	}
});

import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		addCar() {
			var vehicleYear = this.get('year');
			var brand = this.get('make');
			var modelName = this.get('model');
			var trimLevel = this.get('trim');

			//Make sure all fields are filled, otherwise complain to the user
			if((vehicleYear === undefined) || (brand === undefined) || (modelName === undefined) || (trimLevel === undefined)) {
				alert("Please complete all fields!");
			}

			//make sure vehicle year is between 1900 and 2016, otherwise complain to the user
			else if((vehicleYear < 1900) || (vehicleYear > 2016)){
				alert("Please enter a valid year between 1900 and 2016!");
			}

			/*else if((brand !== 'Acura') || (brand !== 'Alfa Romeo') || (brand !== 'AMC') || (brand !== 'Aston Martin') || (brand !== 'Audi') || (brand !== 'Bently') || (brand !== 'BMW') || (brand !== 'Bugatti') || (brand !== 'Buick') || (brand !== 'Cadillac') || (brand !== 'Chevrolet') || (brand !== 'Chrysler') || (brand !== 'Citroen') || (brand !== 'Dodge') || (brand !== 'Ferrari') || (brand !== 'Fiat') || (brand !== 'Ford') || (brand !== 'Geely') || (brand !== 'GMC') || (brand !== 'Honda') || (brand !== 'Hyundai') || (brand !== 'Infiniti') || (brand !== 'Jaguar') || (brand !== 'Jeep') || (brand !== 'Kia') || (brand !== 'Koenigsegg') || (brand !== 'Lamborghini') || (brand !== 'Land Rover') || (brand !== 'Lexus') || (brand !== 'Maserati') || (brand !== 'Mazda') || (brand !== 'McLaren') || (brand !== 'Mercedes-Benz') || (brand !== 'Mini') || (brand !== 'Mitsubishi') || (brand !== 'Nissan') || (brand !== 'Pagani') || (brand !== 'Peugeot') || (brand !== 'Porsche') || (brand !== 'Renault') || (brand !== 'Rolls Royce') || (brand !== 'Saab') || (brand !== 'Subaru') || (brand !== 'Suzuki') || (brand !== 'Tesla') || (brand !== 'Toyota') || (brand !== 'Volkswagen') || (brand !== 'Volvo')){
				alert("Please enter a valid vehicle make!");
				this.transitionToRoute('add-vehicle');
			*/

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
				this.transitionToRoute('home');
			}
		}
	}
});

/*addCar() {
			var vehicleYear = this.get('year');
			var brand = this.get('make');
			var modelName = this.get('model');
			var trimLevel = this.get('trim');

			if (checkVehicle){
				var car = this.store.createRecord('vehicle',{
					year: vehicleYear,
					make: brand,
					model: modelName,
					trim: trimLevel
				});

				car.save();

				console.log('new vehicle added');
				alert("Success, new vehicle was added!");
				this.transitionToRoute('home');
			}
		},

		checkVehicle: function(){
			var vehicleYear = this.get('year');
			var brand = this.get('make');
			var modelName = this.get('model');
			var trimLevel = this.get('trim');

			//Make sure all fields are filled, otherwise complain to the user
			if((vehicleYear === undefined) || (brand === undefined) || (modelName === undefined) || (trimLevel === undefined)) {
				alert("Please complete all fields!");
				return false;
			}

			//make sure vehicle year is between 1900 and 2016, otherwise complain to the user
			if((vehicleYear < 1900) || (vehicleYear > 2016)){
				alert("Please enter a valid year between 1900 and 2016!");
				return false;
			}

			if((brand !== 'Acura') || (brand !== 'Alfa Romeo') || (brand !== 'AMC') || (brand !== 'Aston Martin') || (brand !== 'Audi') || (brand !== 'Bently') || (brand !== 'BMW') || (brand !== 'Bugatti') || (brand !== 'Buick') || (brand !== 'Cadillac') || (brand !== 'Chevrolet') || (brand !== 'Chrysler') || (brand !== 'Citroen') || (brand !== 'Dodge') || (brand !== 'Ferrari') || (brand !== 'Fiat') || (brand !== 'Ford') || (brand !== 'Geely') || (brand !== 'GMC') || (brand !== 'Honda') || (brand !== 'Hyundai') || (brand !== 'Infiniti') || (brand !== 'Jaguar') || (brand !== 'Jeep') || (brand !== 'Kia') || (brand !== 'Koenigsegg') || (brand !== 'Lamborghini') || (brand !== 'Land Rover') || (brand !== 'Lexus') || (brand !== 'Maserati') || (brand !== 'Mazda') || (brand !== 'McLaren') || (brand !== 'Mercedes-Benz') || (brand !== 'Mini') || (brand !== 'Mitsubishi') || (brand !== 'Nissan') || (brand !== 'Pagani') || (brand !== 'Peugeot') || (brand !== 'Porsche') || (brand !== 'Renault') || (brand !== 'Rolls Royce') || (brand !== 'Saab') || (brand !== 'Subaru') || (brand !== 'Suzuki') || (brand !== 'Tesla') || (brand !== 'Toyota') || (brand !== 'Volkswagen') || (brand !== 'Volvo')){
				alert("Please enter a valid vehicle make!");
				return false;
			}

			// If everything checks out, return true
			return true;
		},
	}*/
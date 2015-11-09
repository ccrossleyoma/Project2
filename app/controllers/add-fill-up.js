import Ember from 'ember';

export default Ember.Controller.extend({

	actions: {
		/*vehicles: function(){
        return this.store.find('vehicle.make');
    }.property(),
*/
		addFillUp() {
			var fillUpDate = this.get('date');
			var distance = this.get('miles');
			var volume = this.get('gallons');
			var price = this.get('pricePerGallon');
			var car = this.get('vehicle');
			/*var uName = 1;*/
			/*var t = this;*/
			/*var auth = t.controllerFor('auth');*/

			//Make sure all fields are filled, otherwise complain to the user
			if((fillUpDate === undefined) || (distance === undefined) || (volume === undefined) || (price === undefined) || (car === undefined) /*|| (uName === undefined)*/) {
				alert("Please complete all fields!");
			}

			//Miles traveled is equal to or less than 0
			else if(distance <= 0){
				alert("Gallons of fuel must be greater than 0!");
			}

			//Volume of fuel is equal to or less than 0
			else if(volume <= 0){
				alert("Gallons of fuel must be greater than 0!");
			}

			//Price per gallon is equal to or less than 0
			else if(price <= 0){
				alert("Price per gallon must be greater than 0!");
			}

			//Go ahead and create new record of fill up
			else {
				var newFillUp = this.store.createRecord('fillup',{
					date: fillUpDate,
					miles: distance,
					gallons: volume,
					pricePerGallon: price
				});

				newFillUp.save();

				console.log('new fill-up added');
				alert("Success, new fill-up added!");
				this.transitionTo('compare');
			}
		}
	}
});

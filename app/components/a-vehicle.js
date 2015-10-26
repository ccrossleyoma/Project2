import Ember from 'ember';

export default Ember.Component.extend({
	model: function(){
	    this.store.push('vehicle', {
      	id: 1,
      	year: "2015",
     	make: "Toyota",
      	model: "Camry",
      	trim: "XLE",
    	});

		return this.store.find('vehicle');
	}
});

import Ember from 'ember';

export default Ember.Route.extend({
	model: function(){
			return this.store.findAll('vehicle')
    },

    
/*    maxMPG: function(){
    		var allFillups = this.store.peekAll('fillup');
			var count = allFillups.get('length');
			var lastFillup = allFillups.objectAt(count-1);
			var lastMiles = lastFillup.miles;
			var lastGallons = lastFillup.gallons;
			var mpg = (lastMiles / lastGallons);
    },*/
    
	setupController: function(controller, model){
		controller.set('vehicle', model);
	}
});

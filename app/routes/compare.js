import Ember from 'ember';

export default Ember.Route.extend({
	model: function(){
			var allFillups = this.store.all('fillup');
			var count = allFillups.get('length');
			return allFillups.objectAt(count-1);
    },
    /*mpg: function(){
			var allFillups = this.store.all('fillup');
			var count = allFillups.get('length');
			var lastFillup = allFillups.objectAt(count-1);
			var lastMiles = lastFillup.miles;
			var lastGallons = lastFillup.gallons;
			var mpg = (lastMiles / lastGallons);
			return mpg;
    },
    maxMPG: function(){
    		var allFillups = this.store.all('fillup');
			var count = allFillups.get('length');
			var lastFillup = allFillups.objectAt(count-1);
			var lastMiles = lastFillup.miles;
			var lastGallons = lastFillup.gallons;
			var mpg = (lastMiles / lastGallons);
    },*/
    
	setupController: function(controller, model){
		controller.set('allFillups', model);
	}
});

import Ember from 'ember';

export default Ember.Controller.extend({
/*	avgMPG: function(){
			var allFillups = this.get('fillup');
			var totalMiles = 0;
			var totalGallons = 0;
			allFillups.forEach(function(item){
				totalMiles = totalMiles + allFillups.get('miles');
				totalGallons = totalGallons + allFillups.get('gallons');
			});
			var mpg = (totalMiles / totalGallons);
			return mpg;
    }.property('vehicle'),*/

/*			var count = allFillups.get('length');
			var lastFillup = allFillups.objectAt(count-1);
			var lastMiles = lastFillup.miles;
			var lastGallons = lastFillup.gallons;
			var mpg = (lastMiles / lastGallons);
			return mpg;*/

/*
    avgPricePerMile: function(){
			var allFillups = this.get('fillup');
			var totalMiles = 0;
			var totalPrice = 0;
			allFillups.forEach(function(item){
				totalMiles + allFillups.get('miles');
				totalPrice = totalPrice + allFillups.get('pricepergallon');
			});
			var ppm = (totalPrice / totalMiles);
			return ppm;
	}.property('vehicle'),*/


/*	lastMPG: function(){
			var allFillups = this.get('allFillups');
			var count = allFillups.get('length');
			var lastFillup = allFillups.objectAt(count-1);
			var lastMiles = lastFillup.miles;
			var lastGallons = lastFillup.gallons;
			var mpg = (lastMiles / lastGallons);
			return mpg
	}

	bestMPG: function(){
			var allFillups = this.get('allFillups');
			var totalMiles;
			var totalGallons
			allFillups.forEach(function(item){
				totalMiles = totalMiles + allFillups.get('miles');
				totalGallons = totalGallons + allFillups.get('gallons');
			});
			var mpg = (totalMiles / totalGallons);
			return mpg;
	}.property('allFillups'),
*/
});

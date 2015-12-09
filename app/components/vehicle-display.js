import Ember from 'ember';

export default Ember.Controller.extend({
	fillups: null,
	vehicle: null,
	init: function(){
			this._super();
			var t = this;
			this.store.find('fillups').then(function(records){
				t.set('fillups', records.filterBy('vehicle', t.get('vehicle')));
			});
    },
    
    avgMPG: function(){
		var allFillups = this.get('fillups');
		var totalMiles = 0;
		var totalGallons = 0;
		allFillups.forEach(function(item){
			totalMiles = totalMiles + item.get('miles');
			totalGallons = totalGallons + item.get('gallons');
		});
    }.property('fillups'),
});

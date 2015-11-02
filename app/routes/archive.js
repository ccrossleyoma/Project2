import Ember from 'ember';

export default Ember.Route.extend({
	model: function(){
		return this.store.find('fillup');
    },
    setupController: function(controller, model){
		controller.set('fillup', model);
	}
	/*model: function() {
		return [
		{
			id: 1,
			date: '12/31/2014',
			miles: '356.2',
			gallons: '12.4',
			pricePerGallon: '2.429',
			user: 'Colby',
			vehicle: '2015 Hyundai Sonata 2.0'
		},
		{
			id: 2,
			date: '6/20/2015',
			miles: '512.7',
			gallons: '19.8',
			pricePerGallon: '3.479',
			user: 'Colby',
			vehicle: '1986 Mercedes-Benz 300 SDL'
		}
		];
	}*/
});

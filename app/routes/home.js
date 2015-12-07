import Ember from 'ember';

export default Ember.Route.extend({
	model: function(){
		return this.store.findAll('vehicle');
    },
    
	setupController: function(controller, model){
		controller.set('vehicle', model);
	}
});

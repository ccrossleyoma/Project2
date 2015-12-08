import Ember from 'ember';

export default Ember.Route.extend({
	model: function(){
		return this.store.findAll('fillup');
    },
    setupController: function(controller, model){
		controller.set('fillup', model);
	}
});

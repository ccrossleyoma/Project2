import Ember from 'ember';

export default Ember.Route.extend({
	car: function(){
		return this.store.find('vehicle');
	}
});

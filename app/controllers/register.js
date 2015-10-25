import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		register: function(){
			//Check authentication here
			console.log('User registering');
			var user = this.get('username');
			if(user=="Colby"){
				this.set('errorMsg', 'Registration failed!');
			}
			else{
				this.set('loggedIn', true);
				this.transitionTo('home');
			}

		},

		submit: function(){
			//User clicks submit button
			console.log('New user registered');
			var user = this.get('username');
			if(user=="Colby"){
				this.set('errorMsg', 'Registration failed!');
			}
			else{
				this.set('loggedIn', true);
				this.transitionTo('home');
			}

		},
	}
});
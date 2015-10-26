import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		register: function(){
			//Check authentication here
			console.log('User registering');
			var user = auth.get('username');
			if(user=="Colby"){
				this.set('errorMsg', 'Registration failed!');
			}
			else{
				auth.set('loggedIn', true);
				this.transitionTo('home');
			}

		},

		submit: function(){
			//User clicks submit button
			console.log('New user registered');
			if(password != password2){
				this.set('errorMsg', 'Passwords do not match!');
			}
			else{
				auth.set('loggedIn', true);
				auth.transitionTo('home');
			}

		},
	}
});

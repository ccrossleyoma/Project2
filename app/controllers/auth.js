import Ember from 'ember';

export default Ember.Controller.extend({
	username: '',
	loggedIn: false,
	errorMsg: '',
	remember: false,
	actions: {
		login: function(){
			//Check authentication here
			console.log('login')
			var user = this.get('username');
			if(user!="Colby"){
				this.set('errorMsg', 'Login failed!');
			}
			else{
				this.set('loggedIn', true);
				this.transitionTo('home');
			}

		},
		logout: function(){
			//Log user out of application
			console.log('logout')
			var user = this.get('username');
			if (user == "Colby"){
				this.set('loggedIn', false);
				this.transitionTo('auth');
			}
			else{
				this.set('errorMsg', 'Logout failed!');
			}
		},
		test: function(){
			console.log('test')
		}
	}
});

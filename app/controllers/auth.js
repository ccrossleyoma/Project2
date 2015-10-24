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
		test: function(){
			console.log('test')
		}
	}
});

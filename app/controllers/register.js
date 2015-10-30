import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		createUser() {
			var name = this.get('firstName');
			var uName = this.get('username');
			var pass = this.get('password');
			var pass2 = this.get('password2');

			//Make sure all fields are filled, otherwise complain to the user
			if((name === undefined) || (uName === undefined) || (pass === undefined) || (pass2 === undefined)) {
				alert("Please complete all required fields!")
			}

			//If passwords don't match, complain to the user
			else if(pass !== pass2) {
				alert("Passwords do not match!");
			}

			//Go ahead and create new user account
			else {
				this.store.createRecord('user',{
					firstName: '',
					username: '',
					password: '',
				});

				this.set('firstName', name);
				this.set('username', uName);
				this.set('password', pass);

				console.log('new user registered');
				alert(name + ", you have been registered!");
			}
		}
	}
});

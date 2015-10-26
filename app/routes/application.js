import Ember from 'ember';

export default Ember.Route.extend({
	currentTransition: null,
	beforeModel: function(transition){
		this.authCheck(transition);
		// Will have other stuff here once connected to restapi
	},
	authCheck: function(transition){
		//Method to check user credentials and redirect if necessary
		console.log('Checking authentication');
		var t = this;
		var auth = t.controllerFor('auth');
		console.log("are you logged in "+ auth.get('loggedIn'));
		var previoustrans = t.get('currentTransition');
		console.log('User attempting to access: /'+transition.targetName);

		//If user is not logged in
		if(!auth.loggedIn){
			//If user is requesting about page, allow them to do so unauthenticated
			if(transition.targetname == 'about'){
				t.set('currentTransition', transition);
				transition.abort();
				console.log('User is unauthenicated and is requesting public about page, redirecting');
				transitionToRoute('about');
			}
			//If  user is trying to register, allow them to register without authentication
			else if(transition.targetname == 'register' && (auth.get('loggedIn') == false)){
				t.set('currentTransition', transition);
				transition.abort();
				console.log('User is unauthenicated and is requesting public register page, redirecting');
				transitionToRoute('register');
			}
			//Otherwise, require auth
			else if(transition.targetName !== 'auth' && transition.targetName !== 'about' && transition.targetName !== 'register'){
				t.set('currentTransition', transition);
				transition.abort();
				console.log('User is unauthenicated, redirecting');
				t.transitionTo('auth');
			}
		}
		else if(previoustrans){
			console.log('Redirecting back to original request: /'+previoustrans.targetName);
			t.set('currentTransition', null);
			previoustrans.retry();
		}
		
	},
	setupController: function(controller, model){
		controller.set('authController', this.controllerFor('auth'));
	},
	actions: {
		willTransition: function(transition){
			this.authCheck(transition);
		}
	}
});

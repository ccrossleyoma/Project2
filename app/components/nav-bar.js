import Ember from 'ember';

export default Ember.Component.extend({
	authControllerChild: null,
	actions: {
		display : function(){
			var auth = this.get('authControllerChild');
			auth.set('username', 'colby');
			alert(auth.get('username'));
		},
		logout: function(){
			//Log user out of application
			console.log('logout');
			var auth = this.get('authControllerChild');
			auth.set('loggedIn', false);
			auth.transitionTo('auth');
			alert("Logout sucessful!");
		}
	}
});

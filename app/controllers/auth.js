import Ember from 'ember';

export default Ember.Controller.extend({
    username: '',
    loggedIn: false,
    errorMsg: '',
    remember: false,
    actions: {
        login: function(){
            //do stuff to authenticate here
            var username = this.get('username');
            var password = this.get('password');
            var remember = this.get('remember');
            var data = {
                'username': username,
                'password': password};
            var controllerObj = this;
            Ember.$.post('../api/session/', data, function(response){
                if(response.isauthenticated){
                    //success
                    console.log('Login POST Request to ../api/session/ was successful.');
                    controllerObj.set('username', response.username);
                    controllerObj.set('userid', response.userid);
                    controllerObj.set('loggedIn', true);
                    controllerObj.transitionToRoute('home');
                } else{
                    //errors
                    console.log('Login POST Request to ../api/session/ was successful.');
                    controllerObj.set('errorMsg', response.message);
                }
            });
        },
        logout: function(){
            var remember = this.get('remember');
            var controllerObj = this;
            Ember.$.ajax({url: '../api/session/', type: 'DELETE'}).then(
            function(response){
                console.log('Logout success.');
                controllerObj.set('loggedIn', false);
                controllerObj.set('errorMsg', '');
                controllerObj.set('username', '');
                controllerObj.set('userid', '');
                if(!remember){
                    //save to username and pass to local storage

                }
                controllerObj.transitionToRoute('auth');
            });

        },
    }
});

/*import Ember from 'ember';

export default Ember.Controller.extend({
	username: '',
	loggedIn: false,
	errorMsg: '',
	remember: false,
	actions: {
		login: function(){
			//Check authentication here
			console.log('login');
			var user = this.get('username');
			if(user!=="Colby"){
				this.set('errorMsg', 'Login failed!');
			}
			else{
				this.set('loggedIn', true);
				this.transitionTo('home');
			}

		},
		logout: function(){
			//Log user out of application
			console.log('logout');
			var user = this.get('username');
			if (user === "Colby"){
				this.set('loggedIn', false);
				this.transitionTo('auth');
			}
			else{
				this.set('errorMsg', 'Logout failed!');
			}
		}
	}
});*/

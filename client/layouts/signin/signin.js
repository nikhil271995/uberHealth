Template.signup.events({
    'submit .register-form': function (event) {
        event.preventDefault();
        var email = event.target.email.value;
        var password = event.target.password.value;
        var firstname = event.target.firstname.value;
        var lastname = event.target.lastname.value;
        var mobile = event.target.number.value;
        var password = event.target.password.value;
        var reconfirm =event.target.reconfirm.value;
    
        var user = {'email':email,password:password,profile:{name:firstname +" "+lastname},'mobile':mobile,};

        Accounts.createUser(user,function(err){
            if(!err) {
                FlowRouter.go('/user');
            }
            else
                FlowRouter.go('/');
        });
    }
});

Template.login.events({ 
    'submit .login-form': function (event) {
        event.preventDefault();
        var email = event.target.email.value;
        var password = event.target.password.value;
        Meteor.loginWithPassword(email,password,function(err){
            if(!err) {
                FlowRouter.go('/user');
            }
            else
                FlowRouter.go('/');
        });
    }
});
if(Meteor.isClient){	
	Accounts.onLogin(function(){
		FlowRouter.go('profile');
	});

	Accounts.onLogout(function(){
		FlowRouter.go('home');
	});
}

FlowRouter.triggers.enter([function(context,redirect){
	if(!Meteor.userId()){
		FlowRouter.go('home');
	}
}]);

FlowRouter.route('/',{	
	name:'home',
	action(){
		if(Meteor.userId()){
			FlowRouter.go('profile');
		}
		BlazeLayout.render('index');
	}
});

FlowRouter.route('/profile',{	
	name:'profile',
	action(){
		BlazeLayout.render('MainLayout',{main:'ProfileLayout'});
	}
});

FlowRouter.route('/addskills',{	
	name:'addskill',
	action(){
		BlazeLayout.render('MainLayout',{main:'skills'});
	}
});
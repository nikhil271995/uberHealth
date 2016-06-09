if(Meteor.isClient){	
	Accounts.onLogin(function(){
		FlowRouter.go('userhome');
	});

	Accounts.onLogout(function(){
		FlowRouter.go('home');
	});
}

FlowRouter.route('/',{	
	name:'home',
	action(){
		if(Meteor.userId()){
			FlowRouter.go('userhome');
		}
		BlazeLayout.render('home');
	}
});

FlowRouter.route('/aboutus',{	
	name:'aboutus',
	action(){
		BlazeLayout.render('aboutus');
	}
});

FlowRouter.route('/aboutus',{	
	name:'aboutus',
	action(){
		BlazeLayout.render('aboutus');
	}
});

FlowRouter.route('/terms',{	
	name:'terms',
	action(){
		BlazeLayout.render('terms');
	}
});

FlowRouter.route('/privacy',{	
	name:'privacy',
	action(){
		BlazeLayout.render('privacy');
	}
});

FlowRouter.route('/faq',{	
	name:'faq',
	action(){
		BlazeLayout.render('faq');
	}
});

FlowRouter.route('/login',{	
	name:'login',
	action(){
		BlazeLayout.render('signin',{main:'login'});
	}
});

FlowRouter.route('/signout',{	
	name:'signout',
	action(){
		Meteor.logout(function(err){
			Session.set("ses",false);
		})
		FlowRouter.go("home");
	}
});

FlowRouter.route('/signup',{	
	name:'signup',
	action(){
		BlazeLayout.render('signin',{main:'signup'});
	}
});

FlowRouter.route('/forgot',{	
	name:'forgot',
	action(){
		BlazeLayout.render('signin',{main:'forgot'});
	}
});

FlowRouter.route('/gift',{	
	name:'gift',
	action(){
		BlazeLayout.render('gifts');
	}
});

FlowRouter.route('/apply',{	
	name:'apply',
	action(){
		BlazeLayout.render('apply');
	}
});

FlowRouter.route('/user',{
	name:'userhome',
	action:function(params,queryParams){
		if(!Meteor.userId()){
			FlowRouter.go('home');
		}
		const detail=FlowRouter.getQueryParam('phone');
		Meteor.call('updatePhone', detail);
		BlazeLayout.render('userhome');
	}
});

FlowRouter.route('/booking',{
	name:'booking',
	action: function(params, queryParams){
		if(!Meteor.userId()){
			FlowRouter.go('home');
		}
		const address={
  			street1:FlowRouter.getQueryParam('street'),	
  			street2:FlowRouter.getQueryParam('street2'),	
  			city:FlowRouter.getQueryParam('city'),
  			state:FlowRouter.getQueryParam('state'),
  			zip:FlowRouter.getQueryParam('zip'),	
  			};
		const booking={
		address:address,
		type:FlowRouter.getQueryParam('type'),
		date:FlowRouter.getQueryParam('date')
		};
		if(FlowRouter.getQueryParam('date') && FlowRouter.getQueryParam('zip') && FlowRouter.getQueryParam('street'))
		{
			Meteor.call('updateProfile', booking);
		}
		BlazeLayout.render('booking',{data:FlowRouter.getQueryParam('type')});
	}
});

Template.registerHelper('user',function(){
	return (Meteor.users.find(Meteor.userId()));
});

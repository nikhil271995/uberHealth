Template.header.events({
	'click #logout':function(event){
		event.preventDefault();
		Meteor.call
	}
});

Template.banner.events({
	'click #appoint':function(event){
	event.preventDefault();
		FlowRouter.go("login");
			bootbox.dialog({
            message:"Please Log in to continue",
            title:"Booking Alert",
            backdrop:true,
            onEscape:true
          });
	}
});
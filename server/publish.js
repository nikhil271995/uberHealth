Meteor.publish('users',function(){
	return users.find({ user :this.userId});
});

Meteor.methods({
  updateProfile : function(newProfile) {
    if(this.userId)
      Meteor.users.update(this.userId, {$push : { bookings : newProfile }});
  }
});

Meteor.methods({
  updatePhone : function(newProfile) {
    if(this.userId)
      Meteor.users.update(this.userId, {$set : { phone : newProfile }});
  }
});
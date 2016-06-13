Meteor.publish('users',function(){
	return users.find({ user :this.userId});
});

Meteor.publish('profile',function(){
  return true;
});

Meteor.methods({
  bookings : function(newProfile) {
    if(this.userId)
      Meteor.users.update(this.userId, {$push : { bookings : newProfile }});
  }
});

Meteor.methods({
  updatePhone : function(newProfile) {
    if(this.userId)
      Meteor.users.update(this.userId, {$set : {"profile.phone" : newProfile }});
  }
});

Meteor.methods({
  updateAddress : function(newProfile) {
    if(this.userId)
      Meteor.users.update(this.userId, {$set : {"profile.address" : newProfile }});
  }
});

Meteor.methods({
  apply : function(newProfile) {
      Profile.insert(newProfile);
  }
});
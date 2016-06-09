Meteor.users.allow({
  update: function(userId, user) {
   	return users.find({ user :this.userId}); 
  }
});
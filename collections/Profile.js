Profile = new Mongo.Collection('profile');

Profile.allow({
	insert:function(userId,doc){
			return true;
	},
	update:function(userId,doc){
		console.log(doc);
		return !!userId;
	}
});

ProfileSchema = new SimpleSchema ({
	first_name:{ 
		type: String,
		optional : true
	},
	last_name:{ 
		type: String,
		optional : true
	},
	gender :{
		type : String
	},
	email:{ 
		type: String
	},
	phone : {
		type : Number
	},
	info:{
		type:String
	},
	zip:{
		type:Number
	}
});

Profile.attachSchema(ProfileSchema);
import { Schema }from 'mongoose';

export var UserSchema = new Schema({
	name: { 
		type: String,
		required: true,
		uppercase: true,
		minlength: 3,
		maxlength: 200,
	},
	birth: { 
		type: Date,
		required: true
	},
	email: { 
		type: String,
		required: true
	},
	password: { 
		type: String,
		required: true,
		minlength: 8,
	},
	createdAt: Date
});

UserSchema.pre("save", function(next) {
	if(!this.createdAt)
		this.createdAt = new Date();
	next();
})
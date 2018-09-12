import { BaseSchema, extendSchema } from '../abstract/schema/baseSchema';

export var UserSchema = extendSchema(BaseSchema, {
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
	}
});
const mongoose = require('mongoose');

export function extendSchema (Schema, definition) {
	return new mongoose.Schema(Object.assign({}, Schema.obj, definition));
}

export var BaseSchema = new mongoose.Schema({
	name: { 
		type: String,
		required: true,
		uppercase: true,
		minlength: 3,
		maxlength: 200,
	},
	createdAt: Date
});

BaseSchema.pre("save", function(next) {
	if(!this.createdAt)
		this.createdAt = new Date();
	next();
})

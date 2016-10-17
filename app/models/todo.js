/* creacion del modelo para la base de datos y se exporta*/
var mongoose = require("mongoose");
module.exports = mongoose.model('Todo', {
	text: String,
	done: Boolean
});
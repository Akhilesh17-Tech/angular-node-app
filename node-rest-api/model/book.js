const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let BookSchema = new Schema(
	{
		name: {
			type: String,
		},
		price: {
			type: String,
		},
		description: {
			type: String,
		},
	},
	{
		collection: "books",
	},{
        
    }
);
const Book = mongoose.model("Book", BookSchema);
module.exports = Book;

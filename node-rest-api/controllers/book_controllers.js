const Book = require("../model/book");
const bcrypt = require("bcrypt");
const { response } = require("express");

module.exports.books = async (req, res) => {
	try {
		const books = await Book.find();
		return res.status(200).json({
			books: books,
			success: true,
			message: "All the books are here!",
		});
	} catch (err) {
		console.log(err);
		return res.status(500).json({
			success: false,
			message: "Internal Server Error",
		});
	}
};

module.exports.addBooks = async (req, res) => {
	try {
		await Book.create(req.body);
		return res.status(200).json({
			success: true,
			message: "New Book has been added!",
		});
	} catch (err) {
		console.log(err);
		return res.status(500).json({
			success: false,
			message: "Internal Server Error",
		});
	}
};

module.exports.readBook = async (req, res) => {
	try {
		const { id } = req.params;
		Book.findById(id, function (err, Book) {
			if (err) {
				console.log(err);
				return res.status(404).json({
					message: `Book not found with given Id : ${id} please check Id!`,
				});
			} else {
				return res.status(200).json({
					success: true,
					message: "Please find the details of the Book!",
					Book: Book,
				});
			}
		});
	} catch (err) {
		console.log(err);
		return res.status(500).json({
			success: false,
			message: "Internal Server Error",
		});
	}
};

module.exports.deleteBook = async (req, res) => {
	try {
		const { id } = req.params;
		await Book.findByIdAndDelete(id);
		return res.status(200).json({
			success: true,
			message: "Book deleted",
		});
	} catch (err) {
		console.log(err);
		return res.status(500).json({
			success: false,
			message: "Internal Server Error",
		});
	}
};

module.exports.updateBook = async (req, res) => {
	try {
		const { id } = req.params;
		const { name, price, description } = req.body;
		console.log(id, "------------------------------------");
		Book.findByIdAndUpdate(
			id,
			{
				$set: req.body,
			},
			(error, data) => {
				if (error) {
					console.log(error);
					return res.status(404).json({
						message: `Book not found with given Id : ${id} please check Id!`,
					});
				} else {
					return res.status(200).json({
						success: true,
						message: `Book updated with given Id : ${id}`,
					});
				}
			}
		);
	} catch (err) {
		console.log(err);
		return res.status(500).json({
			success: false,
			message: "Internal Server Error",
		});
	}
};

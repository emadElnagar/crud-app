const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
  title: { type: String, required: true },
  isRead: { type: String, required: true, default: false }
}, {
  timestamps: true,
})

const Book = mongoose.model("Book", bookSchema);
module.exports = Book;

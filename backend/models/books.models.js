import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
  title: { type: String, required: true },
  isRead: { type: String, required: true, default: false }
}, {
  timestamps: true,
})

const Book = mongoose.model("Book", bookSchema);
export default Book;

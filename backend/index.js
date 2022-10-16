const fastify = require('fastify')({ logger: true })
const port = process.env.PORT || 5000
const cors = require('@fastify/cors');

require("./utils/db");
const Book = require("./models/books.models");

fastify.register(cors, { 
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
});

// GET ALL BOOKS
fastify.route({
  method: "GET",
  url: "/books",
  handler: async (_request, reply) => {
    try {
      const Books = await Book.find();
      reply.code(200).send(Books);
    } catch (err) {
      console.error(err);
    }
  },
});

// CREATE A NEW BOOK
fastify.route({
  method: "POST",
  url: "/books",
  handler: async (request, reply) => {
    try {
      const newBook = new Book ({
        title: request.body.title
      });
      await newBook.save();
      reply.code(201).send('Book added successfully');
    } catch(err) {
      console.error(err);
    }
  }
});

// UPDATE BOOK
fastify.route({
  method: "PUT",
  url: "/books/:id/update",
  handler: async (request, reply) => {
    const newBook = {
      title: request.body.title
    }
    const BookId = request.params.id;
    await Book.findByIdAndUpdate(BookId, newBook, (err, _doc) => {
      if (err) {
        console.error(err);
      }
      reply.code(201).send('Book updated successfully');
    });
  }
});

// DELETE BOOK
fastify.route({
  method: "DELETE",
  url: "/books/:id/delete",
  handler: async (request, reply) => {
    const BookId = request.params.id;
    await Book.findByIdAndDelete(BookId, (err, _doc) => {
      if (err) {
        console.error(err);
      }
      reply.code(201).send('Book deleted successfully');
    });
  }
});

// BOOK READ DONE
fastify.route({
  method: "PATCH",
  url: "/books/:id/read/done",
  handler: async (request, reply) => {
    const bookId = request.params.id;
    const newBook = {
      isRead: true
    }
    await Book.findByIdAndUpdate(bookId, newBook, (err, _doc) => {
      if (err) {
        console.error(err);
      }
      reply.code(201).send('Book Updated Successfully');
    });
  }
});

// BOOK HASN'T READ DONE
fastify.route({
  method: "PATCH",
  url: "/books/:id/read/cancel",
  handler: async (request, reply) => {
    const bookId = request.params.id;
    const newBook = {
      isRead: false
    }
    await Book.findByIdAndUpdate(bookId, newBook, (err, _doc) => {
      if (err) {
        console.error(err);
      }
      reply.code(201).send('Book Updated Successfully');
    });
  }
});

const start = async () => {
  try {
    await fastify.listen({ port: port })
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()

const fastify = require('fastify')({ logger: true })
const port = process.env.PORT || 5000

require("./utils/db");
const Book = require("./models/books.models");

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
      const newProduct = {
        title: request.body.title
      }
      await newProduct.save();
      reply.code(201).send('Books added successfully');
    } catch(err) {
      console.error(err);
    }
  }
})

const start = async () => {
  try {
    await fastify.listen({ port: port })
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()

const fastify = require('fastify')({ logger: true })
const port = process.env.PORT || 5000

require("./utils/db");
const Book = require("./models/books.models");

// GET ALL BOOKS
fastify.route({
  method: "GET",
  url: "/products",
  handler: async (request, reply) => {
    try {
      const products = await Product.find();
      reply.code(200).send(products);
    } catch (err) {
      throw boom.boomify(err);
    }
  },
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

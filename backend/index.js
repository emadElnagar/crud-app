const fastify = require('fastify')({ logger: true })
const port = process.env.PORT || 5000

require("./utils/db");

const start = async () => {
  try {
    await fastify.listen({ port: port })
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()

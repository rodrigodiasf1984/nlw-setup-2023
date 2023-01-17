import Fastify from 'fastify'

const app = Fastify()

app.get('/hello', () => {
  return 'hello nlw'
})

app.listen({
  port: 3333
})

import Fastify from 'fastify'
import fastifyCors from '@fastify/cors'
import { appRoutes } from './routes'
import { notificationsRoutes } from './notifications-routes'

const app = Fastify()

app.register(fastifyCors)
app.register(appRoutes)
app.register(notificationsRoutes)

app
  .listen({
    port: 3333,
    host: '0.0.0.0'
  })
  .then((url) => {
    console.log(`Server is running on ${url}`)
  })

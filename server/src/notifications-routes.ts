import { FastifyInstance } from 'fastify'
import WebPush from 'web-push'
import { z } from 'zod'

const publicKey =
  'BLHnmpbARzEFYynlFG1_5Z_c2s9lOdSun0ZjtWV_W04YUNmVv2BUpdR-h_p4n9AQWgbf6I2LJqWkp9KRAJM6ZPw'
const privateKey = 'ydODR9qIddNXNa7S4P3krvZkpIqwDMj9dLt0p7e4dkk'

WebPush.setVapidDetails('http://localhost:3333', publicKey, privateKey)

export const notificationsRoutes = async (app: FastifyInstance) => {
  app.get('/push/public_key', () => {
    return { publicKey }
  })

  app.post('/push/register', (request, reply) => {
    console.log(request.body)
    return reply.status(201).send()
  })

  app.post('/push/send', async (request, reply) => {
    const sendPushBody = z.object({
      subscription: z.object({
        endpoint: z.string(),
        keys: z.object({
          p256dh: z.string(),
          auth: z.string()
        })
      })
    })

    const { subscription } = sendPushBody.parse(request.body)
    setTimeout(() => {
      WebPush.sendNotification(subscription, 'Hello world')
    }, 5000)

    return reply.status(201).send()
  })
}

import Fastify from 'fastify'
import { PrismaClient } from '@prisma/client'

const app = Fastify()
const prisma = new PrismaClient()

app.get('/hello', async () => {
  const habits = await prisma.habit.findMany()
  console.log('✅ ~ habits', JSON.stringify(habits, null, 2))
  return habits
})

app
  .listen({
    port: 3333
  })
  .then(() => {
    console.log('Server is running on port 3333')
  })

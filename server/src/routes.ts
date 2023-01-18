import { FastifyInstance } from 'fastify'
import { prisma } from './lib/prisma'

export async function appRoutes(app: FastifyInstance) {
  app.get('/hello', async () => {
    const habits = await prisma.habit.findMany()
    console.log('✅ ~ habits', JSON.stringify(habits, null, 2))
    return habits
  })
}

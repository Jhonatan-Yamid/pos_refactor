import { config } from 'dotenv'

if (process.env.NODE_ENV === 'test' || process.env.VITEST) {
  config({ path: '.env.test', override: true })
}

let PrismaClient

if (process.env.DATABASE_URL_TEST) {
  const testClient = await import('../../prisma/@prisma/client-test/index.js')
  PrismaClient = testClient.PrismaClient
} else {
  const client = await import('@prisma/client')
  PrismaClient = client.PrismaClient
}

const prismaClientSingleton = () => {
  return new PrismaClient()
}

const globalForPrisma = globalThis

const prisma = globalForPrisma.prisma ?? prismaClientSingleton()

export default prisma

if (process.env.NODE_ENV !== 'production') {
  global.prisma = global.prisma || prisma;
}
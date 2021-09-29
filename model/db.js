const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

module.exports.PrismaClient = prisma

module.exports.createPost = async function(data) {
  await prisma.post.create({
    data
  })
}
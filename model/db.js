const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

module.exports.Post = prisma.post
module.exports.Email = prisma.email
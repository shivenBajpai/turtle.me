const Email = require('./db').Email

module.exports.addEmail = async (email) => {
  if (await Email.findUnique({ where: { email } })) {
    Email.update({ where: { email }, data: { enrolled: true } })
    return
  }
  await Email.create({data:{email,enrolled:true}})
}

module.exports.optOut = async () => {
  Email.update({ where: { email }, data: { enrolled: false } })
}

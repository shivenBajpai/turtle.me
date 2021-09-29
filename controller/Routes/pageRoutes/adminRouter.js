const adminRouter = require('express').Router()

adminRouter.get('/admin', (req,res) => {
  res.json({status:"hello admin"})
})

adminRouter.get('/admin/createpost',(req,res) => {
  res.status(200).send("not done yet")
})

module.exports = adminRouter
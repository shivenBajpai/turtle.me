const miscRouter = require('express').Router()

miscRouter.get('/', (req,res) => {
  getPostIds();
})

miscRouter.get('/ping', (req, res) => {
  res.json({ status: 'optimal' })
})

miscRouter.get('/newsletter', (req,res) => {
  res.json({status:"news"})
})

miscRouter.get('newsletter/optout', (req,res) => {
  res.json(200, {status: "signout page"})
})

miscRouter.get('/tutles',(req,res) => {
  res.status(200).send("You found the easter egg :P")
})

module.exports = miscRouter
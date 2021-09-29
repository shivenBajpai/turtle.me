const blogRouter = require('express').Router()

blogRouter.get('/blog', (req,res) => {
  res.json({status:"blog"})
})

blogRouter.get('/blog/:id',(req,res) => {
  res.json({status:"ok",id:req.params.id})
})

module.exports = blogRouter
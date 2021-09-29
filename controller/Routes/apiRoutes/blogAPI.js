const blogAPI = require('express').Router()
const getPostIds =  require('../../../model/Post').getPostIds
const getPost =  require('../../../model/Post').getPost
const getPosts =  require('../../../model/Post').getPosts

blogAPI.post('/blog',(req,res) => {
  getPosts()
  .then((posts) => res.json(posts))
})

blogAPI.post('/latest',(req,res) => {
  getPostIds()
  .then((ids) => res.json(ids[0].id))
})

blogAPI.post('/blog/:id',(req,res) => {
  getPost(parseInt(req.params.id))
  .then((post) => res.json(post))
})

module.exports = blogAPI
const adminAPI = require('express').Router()
const createPost = require('../../../model/Post').createPost

adminAPI.post('/admin/createpost',(req,res) => {
  if (req.body.auth !== process.env.ADMIN_PASS) {
    res.json(401,{error:"Admin access denied, incorrect passcode."})
  }
  createPost(req.body.title, req.body.content, req.body.thumbnail)
  .then(() => {res.json({success:true})})
})

module.exports = adminAPI
const newsletterAPI = require('express').Router()
const addEmail = require('../../../model/Email').addEmail;
const optOut = require('../../../model/Email').optOut;

newsletterAPI.post('/newsletter/signup',(req,res) => {
  addEmail(req.body.email).then(res.json({success:true}))
})

newsletterAPI.post('/newsletter/signout',(req,res) => {
  optOut(req.body.email).then(res.json({success:true}))
})

module.exports = newsletterAPI
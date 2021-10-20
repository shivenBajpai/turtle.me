const Router = require('express').Router();
const blogAPI = require('./apiRoutes/blogAPI')
const newsletterAPI = require('./apiRoutes/newsletterAPI')
const adminAPI = require('./apiRoutes/adminAPI')
const path = require('path');

//Send Single-Page-Web-App to all get requests for vue-router to handle
Router.get('*',(req,res) => {
  res.sendFile(path.join(__dirname, '../../view', 'index.html'));
})

//API routes
Router.use('/techtutles',blogAPI);
Router.use('/techtutles',newsletterAPI);
Router.use('/techtutles',adminAPI);

Router.post('*',(req,res) => {
  // respond with json
  if (req.accepts('json')) {
    res.json({ error: 'Not found' });
    return;
  }

  // default to plain-text. send()
  res.type('txt').send('Not found');
})

module.exports = Router
const Router = require('express').Router();
const blogRouter = require('./pageRoutes/blogRouter')
const miscRouter = require('./pageRoutes/miscRouter')
const adminRouter = require('./pageRoutes/adminRouter')
const blogAPI = require('./apiRoutes/blogAPI')
const newsletterAPI = require('./apiRoutes/newsletterAPI')
const adminAPI = require('./apiRoutes/adminAPI')

//Webpage routes
Router.use(blogRouter);
Router.use(miscRouter);
Router.use(adminRouter);

//API routes
Router.use('/techtutles',blogAPI);
Router.use('/techtutles',newsletterAPI);
Router.use('/techtutles',adminAPI);

//404 Page 
Router.get('*',(req,res) => {
  res.status(404);

  // respond with html page
  if (req.accepts('html')) {
    res.sendFile('D:\\Shiven_stuff\\Node.js\\turtle.me\\view\\404.html');
    return;
  }
})

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
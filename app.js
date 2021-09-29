//Loading Environment Variables, Libraries
require('dotenv').config()
const bodyParser = require('body-parser')
const GracefulShutdownManager = require('@moebius/http-graceful-shutdown').GracefulShutdownManager;
const Routes = require('./controller/Routes/indexRouter');
const Express = require('express')

//Creating App and Settings
const App = Express()
App.set('views',__dirname + "/view")
Express.static('./model/static', )

//Middleware
App.use(bodyParser.urlencoded({extended:false}))
App.use(bodyParser.json())

//Routes
App.use(Routes)

//Error Handler
App.use((err,req,res,next) => {
  console.log(err.stack);
  console.log(err.name);
  console.log(err.code);

  res.status(500).json({
    message: "Oh noes, Something went wrong."
  })
})

//Starting Server
const PORT = process.env.PORT || 8080
const server = App.listen(PORT, () => {
  console.log(`Server Online on port ${PORT}`)
})
const shutdownManager = new GracefulShutdownManager(server);
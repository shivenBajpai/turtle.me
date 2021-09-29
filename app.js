//Loading Environment Variables, Libraries
require('dotenv').config()
const GracefulShutdownManager = require('@moebius/http-graceful-shutdown').GracefulShutdownManager;

//Creating App
const App = require('express')()

//Middleware

//Routes
App.get('/ping', (req, res) => {
  res.json({ status: 'optimal' })
})

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
//Loading Environment Variables
require('dotenv').config()

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
App.listen(PORT, () => {
  console.log(`Server Online on port ${PORT}`)
})

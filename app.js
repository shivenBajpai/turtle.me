require('dotenv').config()
const App = require('express')()

App.get('/ping', (req, res) => {
  res.json({ status: 'optimal' })
})

App.listen(process.env.PORT, () => {
  console.log('Server Online')
})

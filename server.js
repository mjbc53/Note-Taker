const express = require('express')
//port
const PORT = process.env.PORT || 3001
const app = express()
//import apiroutes
const apiRoutes = require('./routes/apiRoutes')
const htmlRoutes = require('./routes/htmlRoutes')

//middleware
app.use(express.urlencoded({ extended: true }))
app.use(express.json()) 
app.use(express.static('public'))

//use routes
app.use('/api', apiRoutes)
app.use('/', htmlRoutes)


//listener for the server
app.listen(PORT, () => {
  console.log(`API server is on http://localhost:${PORT}`)
})

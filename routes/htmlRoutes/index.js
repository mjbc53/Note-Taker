const router = require('express').Router()
//inport path
const path = require('path')

//on default / of page load the landing page
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/index.html'))
})

// when button is clicked open notes on /notes 
router.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/notes.html'))
})

// if anything is search wrong just return to the landing page
router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/index.html'))
})

module.exports = router
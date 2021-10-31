const router = require('express').Router()
const { createNewNote, validateNote }= require('../../lib/notes')
const { notes } = require('../../data/db.json')

router.get('/notes', (req, res) => {
  res.json(notes)
 })
 
router.post('/notes', (req, res) => {
  if(!validateNote(req.body)){
    res.status(400).send('The note is not entered correctly')
  }else{
    const note = createNewNote(req.body, notes)
    res.json(note)
  }
})

 module.exports = router
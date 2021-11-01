const router = require('express').Router()
//get functions from lib
const { createNewNote, validateNote }= require('../../lib/notes')
//get dataset
let { notes } = require('../../data/db.json')
const fs = require('fs')
const path = require('path')

//get route to get all notes from dataset
router.get('/notes', (req, res) => {
  res.json(notes)
 })
 
// post route for added notes to the dataset
router.post('/notes', (req, res) => {
  req.body.id = notes.length.toString()

  if(!validateNote(req.body)){
    res.status(400).send('The note is not entered correctly')
  }else{
    const note = createNewNote(req.body, notes)
    res.json(note)
  }
})

//delete route for deleting a note
router.delete('/notes/:id', (req, res) => {
  const { id } = req.params

  const deleted = notes.find( note => note.id === id )

  if(deleted){
    notes = notes.filter(note => note.id !== id)
    fs.writeFileSync(
    path.join(__dirname, '../../data/db.json'),
    JSON.stringify({notes}, null, 2)
    )

    res.send('Delete was complete')
  }else{
    res.status(400).send('The note was not found')
  }
})

 module.exports = router
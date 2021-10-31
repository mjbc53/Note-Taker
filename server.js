const express = require('express')

const PORT = process.env.PORT || 3001

const app = express()

const { notes } = require('./data/db.json')

const { createNewNote, validateNote } = require('./lib/notes')

app.use(express.urlencoded({ extended: true }))
app.use(express.json()) 

app.get('/api/notes', (req, res) => {
 res.json(notes)
})

app.post('/api/notes', (req, res) => {
  if(!validateNote(req.body)){
    res.status(400).send('The note is not entered correctly')
  }else{
    const note = createNewNote(req.body, notes)
    res.json(note)
  }
})

app.listen(PORT, () => {
  console.log(`API server is on http://localhost:${PORT}`)
})

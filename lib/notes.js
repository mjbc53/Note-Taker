const fs = require('fs')
const path = require('path')

function validateNote(note) {
  if(!note.title){
    return false
  }
  if(!note.text){
    return false
  }
  return true
}

function createNewNote(body, notes){
  const note = body 
  notes.push(note)
  fs.writeFileSync(
    path.join(__dirname, '../data/db.json'),
    JSON.stringify({ notes }, null, 2)
  )
}

module.exports = {
  createNewNote,
  validateNote
}
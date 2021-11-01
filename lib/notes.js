//import fs and path
const fs = require('fs')
const path = require('path')

//validate that strings are not empty for the notes 
function validateNote(note) {
  if(!note.title){
    return false
  }
  if(!note.text){
    return false
  }
  return true
}

//create a new note and added it to the dataset
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
  validateNote,
}
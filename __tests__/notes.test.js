const fs = require('fs')

const { createNewNote, validateNote } = require('../lib/notes')

const { notes } = require('../data/db.json')
const exp = require('constants')

jest.mock('fs')

test('create new note object', () => {
  const note = createNewNote(
    {
      title: 'test note',
      text: 'text of note',
      id: 15
    },
    notes
  )
  
  expect(note.title).toEqual('test note')
  expect(note.text).toEqual('text of note')
  expect(note.id).toEqual(15)
})

test('Check for validation on objects created', () => {
  const validNote = {
    title: 'hello',
    text: 'goodbye'
  }
  

  const invalidNote = {
    title : '',
    text : '',
  }

  const resultValid = validateNote(validNote)
  const resultInvalid = validateNote(invalidNote)

  expect(resultValid).toEqual(true)
  expect(resultInvalid).toEqual(false)
})
import CreateArea from './components/CreateArea'
import Header from './components/Header'
import React, { useState } from 'react'
import Note from './components/Note'

function App() {
  const [notes, setNotes] = useState([])
  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote]
    })
  }
  function deleteNote(noteToDelete) {
    setNotes((prevNotes) => {
      return notes.splice(prevNotes, 1)
    })
  }
  return (
    <div className='App'>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        )
      })}
    </div>
  )
}

export default App

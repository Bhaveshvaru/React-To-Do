import React, { useState } from 'react'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'
const CreateArea = (props) => {
    const [note, setNote] = useState({
        title: "",
        content: ""
      });
    
      function handleChange(event) {
        const { name, value } = event.target;
    
        setNote(prevNote => {
          return {
            ...prevNote,
            [name]: value
          };
        });
      }
    
      function submitNote(event) {
        props.onAdd(note);
        setNote({
          title: "",
          content: ""
        });
        event.preventDefault();
      }
  return (
    <>
      <form className='create-note'>

          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />

        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={3}
        />
        <Fab onClick={submitNote}>
          <AddIcon />
        </Fab>
      </form>
    </>
  )
}

export default CreateArea

import React, { useState } from 'react'
import AddNote from './AddNote'
import RenderNotes from './RenderNotes'

const initialNotes = [
    {
        id: 0,
        title: "Note 1",
        description: "This is note 1"
    },
    {
        id: 1,
        title: "Note 2",
        description: "This is note 2"
    },
    {
        id: 2,
        title: "Note 3",
        description: "This is note 3"
    }
]
const Crud = () => {
    //todo app with adding and deleting the notes
    // we handle the one note and add it into the notes array

    const [notes, setNotes] = useState(initialNotes)

    const handleAddNote = (note) => {
        // console.log("note", note)
        const id = notes.length + 1;
        // const id=Math.random().toString(36).substring(2, 9); // generate a random id
        const notesWithId = { ...note, id }
        setNotes(previous => [...previous, notesWithId])
    }

    const handleDeleteNote = (id) => {
        // console.log("id", id)
        const deleteNote = notes.filter(note => note.id !== id)
        setNotes(deleteNote)
        console.log("deleteNote", deleteNote)
    }

    //assignment
    const handleUpdateNote = (note) => {
        console.log("note", note)
    }

    return (
        <div>
            <AddNote handleAddNote={handleAddNote} />
            <RenderNotes notes={notes} handleDeleteNote={handleDeleteNote} handleUpdateNote={handleUpdateNote} />
        </div>
    )
}

export default Crud

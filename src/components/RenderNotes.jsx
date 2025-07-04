import React from 'react'

const RenderNotes = (props) => {
    const { notes, handleDeleteNote, handleEditableNote } = props;

    const handleDelete = (id) => {
        // console.log("id", id)
        handleDeleteNote(id);
    }

    const handleUpdate = (note) => {
        handleEditableNote(note);
    }
    return (
        <div style={{
            display: "flex",
            gap: "10px",
            flexWrap: "wrap",
        }}>
            {notes?.map((note) => (
                <div key={note._id}  >
                    <h2>{note._id}</h2>
                    <h2>{note.title}</h2>
                    <p>{note.description}</p>
                    <button onClick={() => handleDelete(note.id)}>Delete</button>
                    <button onClick={() => handleUpdate(note)}>Update</button>
                </div>
            ))}
        </div>
    )
}

export default RenderNotes

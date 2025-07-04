import React, { useEffect, useState } from "react";
import AddNote from "./AddNote";
import RenderNotes from "./RenderNotes";

const initialNotes = [
  {
    id: 0,
    title: "Note 1",
    description: "This is note 1",
  },
  {
    id: 1,
    title: "Note 2",
    description: "This is note 2",
  },
  {
    id: 2,
    title: "Note 3",
    description: "This is note 3",
  },
];
const CrudWithMongo = () => {
  const url = "http://localhost:3000/";
  //todo app with adding and deleting the notes
  // we handle the one note and add it into the notes array

  const [notes, setNotes] = useState(null);
  const [editableNote, setEditableNote] = useState(null);

  const fetchNotes = async () => {
    const response = await fetch(url);
    const json = await response.json();
    console.log("refresh", json);
    setNotes(json);
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const handleAddNote = async (note) => {
    // console.log("note", note)
    // const id = notes.length + 1;

    // console.log(
    //   "Json",
    //   JSON.stringify(
    //     { title: note.title, description: note.description },
    //   ),
    //   { title: note.title, description: note.description }
    // );

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: note.title,
        description: note.description
      })
    });

    const data=await response.json()
    console.log("new note",data)

    // const id=Math.random().toString(36).substring(2, 9); // generate a random id
    // const notesWithId = { ...note, id };
    // setNotes((previous) => [...previous, notesWithId]);
  };

  const handleDeleteNote = (id) => {
    // console.log("id", id)
    const deleteNote = notes.filter((note) => note.id !== id);
    setNotes(deleteNote);
    console.log("deleteNote", deleteNote);
  };

  //assignment
  const handleEditableNote = (note) => {
    console.log("handle editable invoke", note);
    setEditableNote(note);
  };

  const handleUpdateNote = (note) => {
    console.log("handle update invoke", note);
    const updateNote = notes.map((prevNote) =>
      prevNote.id === editableNote.id ? note : prevNote
    );
    setNotes(updateNote);
    setEditableNote(null);
  };

  return (
    <div>
      <AddNote
        handleAddNote={handleAddNote}
        editableNote={editableNote}
        handleUpdateNote={handleUpdateNote}
      />
      <RenderNotes
        notes={notes}
        handleDeleteNote={handleDeleteNote}
        handleEditableNote={handleEditableNote}
      />
    </div>
  );
};

export default CrudWithMongo;

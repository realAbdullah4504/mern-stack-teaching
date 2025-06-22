// console.log("hello from node js")
const express = require("express");

const cors = require("cors");

const app = express();

// is the gate between frontend and backend
app.use(cors())

// make the response
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const notes = [
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
// there are the 3 things which we can send from the postman request
//req.query,req.params,req.body
// you need to make the query in the get request and only show the note which we query  
app.get("/", (req, res) => {
    console.log("query", req.query)
    const id = parseInt(req.query.id);
    let filteredNotes = [];
    if (id)
        filteredNotes = notes.filter(note => note.id === id)
    else
        filteredNotes = notes
    // const filteredNotes=id ? notes.filter(note=>note.id===id) : notes
    res.send(filteredNotes)
})

app.post("/", (req, res) => {
    // console.log("request", req)
    const title = req.body.title;
    const description = req.body.description;
    const addNote = { id: notes.length + 1, title, description }
    notes.push(addNote)
    res.json(notes)
})

app.put("/:id", (req, res) => {
    const id = parseInt(req.params.id);
    console.log("id", id)
    const title = req.body.title;
    const description = req.body.description;


    const updateNotes = notes.map((note) => {
        if (note.id === id) {
            note.title = title,
                note.description = description
        }
        return note
    })

    console.log("updated notes", updateNotes)
    res.json(updateNotes)
})

app.delete("/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const filteredNotes = notes.filter((note) => note.id !== id);

    notes.length = 0;
    notes.push(...filteredNotes);

    res.json(notes)
})


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

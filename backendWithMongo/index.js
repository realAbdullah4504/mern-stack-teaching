const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
app.use(cors())

// make the response
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const mongoDbUri = "mongodb://localhost:27017/";



const notesSchema = new mongoose.Schema({
    title: String,
    description: String
})

//register the model
const Note = mongoose.model("Note", notesSchema)

app.get("/", async (req, res) => {
    const notes = await Note.find();
    res.json(notes)
})

app.post("/", async (req, res) => {
    console.log(req,res)
    const title = req.body.title;
    const description = req.body.description;

    const newNote = new Note({
        title,
        description
    })
    await newNote.save();
    res.json(newNote)
})

app.delete("/:id", async (req, res) => {
    const id = req.params.id;
    console.log("id", id)
    const deleteNote = await Note.findByIdAndDelete(id)
    res.json(deleteNote)
})

app.put("/:id", async (req, res) => {
    const id = req.params.id;

    const title = req.body.title;
    const description = req.body.description;
    console.log("title", title, "description", description)
    const updateNote = await Note.findByIdAndUpdate(id, {
        title,
        description
    }, { new: false })

    res.json(updateNote);

})

mongoose.connect(mongoDbUri, {
    dbName: "notesDb"
}).then(() => {
    console.log("connected to db")
}).catch((err) => {
    console.log("error", err)
})

app.listen(3000, () => {
    console.log("server is running on port 3000")
})
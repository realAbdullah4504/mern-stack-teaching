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
    const title = req.body.title;
    const description = req.body.description;

    const newNote = new Note({
        title,
        description
    })
    await newNote.save();
    res.json(newNote)
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
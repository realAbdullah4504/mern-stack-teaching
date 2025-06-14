// console.log("hello from node js")
const express = require("express");

const cors = require("cors");

const app = express();

// is the gate between frontend and backend
app.use(cors())

// make the response
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get("/", (req, res) => {
    res.send("hello from node js")
})

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

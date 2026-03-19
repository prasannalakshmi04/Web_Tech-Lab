const express = require("express");
const { MongoClient } = require("mongodb");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.static("public"));

const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);

let db;

async function startServer() {

    await client.connect();
    db = client.db("studentNotes");

    console.log("MongoDB Connected");

}

startServer();


// ADD NOTE
app.post("/notes", async (req,res)=>{

    const note = {
        title: req.body.title,
        subject: req.body.subject,
        description: req.body.description
    };

    const result = await db.collection("notes").insertOne(note);

    res.json(result);

});


// GET NOTES
app.get("/notes", async (req,res)=>{

    const notes = await db.collection("notes").find().toArray();

    res.json(notes);

});


app.listen(3000, ()=>{
    console.log("Server running on port 3000");
});
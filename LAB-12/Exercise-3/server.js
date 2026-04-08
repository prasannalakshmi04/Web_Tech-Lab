const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json()); 


mongoose.connect("mongodb://127.0.0.1:27017/studentDB")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));


const studentSchema = new mongoose.Schema({
  name: String,
  department: String,
  marks: Number
});


const Student = mongoose.model("Student", studentSchema);


app.post("/add", async (req, res) => {
  const student = await Student.create(req.body);
  res.send(student);
});


app.get("/students", async (req, res) => {
  const students = await Student.find();
  res.send(students);
});


app.put("/update/:id", async (req, res) => {
  const updated = await Student.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.send(updated);
});


app.delete("/delete/:id", async (req, res) => {
  await Student.findByIdAndDelete(req.params.id);
  res.send("Deleted successfully");
});
app.get("/", (req, res) => {
  res.send("Welcome to MongoDB CRUD App");
});
app.use((req, res) => {
  res.status(404).send("Page not found");
});


app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
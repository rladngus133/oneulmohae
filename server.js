const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = 8080;

app.use(express.static(__dirname + "/public"));

app.listen(port, () => {
  console.log("http://localhost:8080 에서 서버 실행중");
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/me", (req, res) => {
  res.sendFile(__dirname + "/me.html");
});

app.get("/login", (req, res) => {
  res.sendFile(__dirname + "/login.html");
});

app.get("/signup", (req, res) => {
  res.sendFile(__dirname + "/signup.html");
});

mongoose
  .connect(
    "mongodb+srv://rladngus133:zmfovktm13@cluster0.j1se9mm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("MongoDB Connect"))
  .catch((err) => console.log(err));

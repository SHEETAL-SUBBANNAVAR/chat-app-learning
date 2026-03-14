const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const chat = require("./models/chat");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
main()
  .then(() => {
    console.log("MongoDB connection successful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://localhost:27017/whatsapp");
  console.log("Connected to MongoDB");
}
// index route
app.get("/chats", async (req, res) => {
  let chats = await chat.find();
  res.render("index.ejs", { chats });
});

// new chat route
app.get("/chats/new", (req, res) => {
  res.render("new.ejs");
});

//create chat route
app.post("/chats", async (req, res) => {
  let { from, to, Mess } = req.body;
  let newChat = new chat({
    from: from,
    to: to,
    Mess: Mess,
    craetes_at: new Date(),
  })
  newChat
    .save()
    .then((result) => {
      console.log("Chat was saved");
    })
    .catch((err) => {
      console.log(err);
    });
  res.redirect("/chats");
});
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(8080, () => {
  console.log(`Server is running on port ${8080}`);
});

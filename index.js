const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const chat = require("./models/chat");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

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
app.get("/chats",async(req, res) => {
    let chats = await chat.find();
    res.render("index.ejs", { chats }  );
}   );

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(8080, () => {
  console.log(`Server is running on port ${8080}`);
});

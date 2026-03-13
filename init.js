const mongoose = require("mongoose");
const chat = require("./models/chat");
main()
  .then(() => {
    console.log("MongoDB connection successful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://localhost:27017/whatsapp");
  console.log("Connected to MongoDB");
  
}

// let chat1= new chat({
//     from: "Alice",
//     to: "Bob",
//     Mess: "send me your exam sheets please",
//     craetes_at: new Date(),
// });

// chat1.save().then((res) => {
//     console.log(res);
// })
// chat.deleteOne({ from: "Alice" }).then((res) => {
//     console.log(res);
// });

chat.insertMany([
    {
        from: "Alice",
        to: "Bob",
        Mess: "send me your exam sheets please",
        craetes_at: new Date(),
    },
    {
        from: "Bob",
        to: "Alice",   
        Mess: "ok, I will send you",
        craetes_at: new Date(),
    },
    {
        from: "ram  ",
        to: "shyam",
        Mess: "send me your vtu important questions",
        craetes_at: new Date(),
    },]);
    

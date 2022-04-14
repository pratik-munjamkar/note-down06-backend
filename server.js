const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require('dotenv').config()
const userRouter = require("./routes/userRouter");
const noteRouter=require("./routes/noteRouter")
const path = require('path')

const app = express();
app.use(express.json());
app.use(cors());

//routes
app.use("/users", userRouter);
app.use("/api/notes",noteRouter);

app.get("/", (req, res) => {
  res.json("To be Noted in note app : Have a Good day !!");
});

const PORT = process.env.PORT || 7000;

const CONNECTION_URL =
  "mongodb+srv://pra-tik_06:pratik123@cluster0.nwcyp.mongodb.net/NoteApp";

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`MongoDb Connected !!
    Server Running on Port: ${PORT}`)
    )
  )
  .catch((error) => console.log(`${error} did not connect`));


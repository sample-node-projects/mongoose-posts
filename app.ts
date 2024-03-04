import bodyParser from "body-parser";
import express from "express";
import mongoose from "mongoose";

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.json({ message: "Hi" });
});

mongoose
  .connect(
    "mongodb+srv://malhotrasaksham:8hiICmjloNiGsWxO@cluster0.tcgrofx.mongodb.net/posts?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(3000);
  })
  .catch((err) => {
    console.error("Unable to connect to the database", err);
  });
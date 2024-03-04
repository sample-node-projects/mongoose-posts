import bodyParser from "body-parser";
import express from "express";
import mongoose from "mongoose";
import { User } from "./model/user";
import { userRouter } from "./route/user";

const app = express();

let user;

app.use(bodyParser.json());

app.use("/users", userRouter);

app.listen(3000);
mongoose
  .connect(
    "mongodb+srv://malhotrasaksham:8hiICmjloNiGsWxO@cluster0.tcgrofx.mongodb.net/posts?retryWrites=true&w=majority"
  )
  .then(async () => {
    user = await User.findOne().exec();
    if (!user) {
      user = await User.create({ name: "Saksham", email: "saksham@email.com" });
    }
  })
  .then(() => {
    app.listen(3000);
  })
  .catch((err) => {
    console.error("Unable to connect to the database", err);
  });

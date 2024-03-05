import bodyParser from "body-parser";
import express, { NextFunction } from "express";
import mongoose, { Document } from "mongoose";
import { IUser, User } from "./model/user";
import { userRouter } from "./route/user";
import { postRouter } from "./route/post";

const app = express();

let user: Document<IUser>;

app.use(bodyParser.json());

app.use("/", (req: any, _res: any, next: NextFunction) => {
  req.body.userId = user._id;
  next();
});

app.use("/users", userRouter);

app.use("/posts", postRouter);

mongoose
  .connect(
    "mongodb+srv://malhotrasaksham:8hiICmjloNiGsWxO@cluster0.tcgrofx.mongodb.net/posts?retryWrites=true&w=majority"
  )
  .then(async () => {
    user = (await User.findOne().exec()) as Document<IUser>;
    if (!user) {
      user = await User.create({ name: "Saksham", email: "saksham@email.com" });
    }
  })
  .then(() => {
    app.listen(3333);
  })
  .catch((err) => {
    console.error("Unable to connect to the database", err);
  });

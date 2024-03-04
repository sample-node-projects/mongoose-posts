import bodyParser from "body-parser";
import express from "express";

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.json({ message: "Hi" });
});

app.listen(3000);

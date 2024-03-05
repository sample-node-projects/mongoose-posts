import { Router } from "express";

const postRouter = Router();

postRouter.get("/:id", getPostByID);

postRouter.get("/all", getPosts);

postRouter.post("/add", addPost);

export { postRouter };

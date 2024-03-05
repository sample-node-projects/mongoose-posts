import { Router } from "express";
import { addPost, getPostByID, getPosts } from "../controllers/post";

const postRouter = Router();

postRouter.get("/all", getPosts);

postRouter.get("/:id", getPostByID);

postRouter.post("/add", addPost);

export { postRouter };

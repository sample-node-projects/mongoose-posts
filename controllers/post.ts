import { Request, Response } from "express";
import { IPost, Post } from "../model/post";
import { HttpResponse } from "../types/http-response";

export async function addPost(
  req: Request<{}, {}, IPost & { userId: string }>,
  res: Response<HttpResponse<IPost | null>>
) {
  const post = new Post(req.body);
  const savedPost = await post.save();
  res.json({
    message: "Post added successfully!",
    data: {
      _id: savedPost._id,
      title: savedPost.title,
      description: savedPost.description,
    } as IPost,
  });
}

function getPostByID() {

}

function getPosts() {
    
}
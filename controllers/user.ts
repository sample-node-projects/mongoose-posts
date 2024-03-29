import { Request, Response } from "express";
import { IUser, User } from "../model/user";
import { HttpResponse } from "../types/http-response";

export async function getAllUsers(
  req: Request,
  res: Response<HttpResponse<IUser[]>>
) {
  const users = await User.find().select("-__v").exec();
  res.json({ message: "Successfully fetched users", data: users });
}

export async function getUserById(
  req: Request<{ id: string }>,
  res: Response<HttpResponse<IUser | null>>
) {
  const userId = req.params.id;

  try {
    const user = await User.findById(userId).select("-__v").exec();
    return res.json({ message: "User found!", data: user });
  } catch (err) {
    console.log(err);
    res.status(404).json({ message: "User not found" });
  }
}

export async function addUser(
  req: Request<{}, {}, IUser>,
  res: Response<HttpResponse<IUser | null>>
) {
  const userRequest = req.body;

  try {
    let userObj = await User.findOne({ email: userRequest.email }).exec();
    console.log(userObj);
    if (!userObj) {
      userObj = await User.create(userRequest);
      res.status(201).json({
        message: "Successfully added a new user!",
        data: {
          _id: userObj._id,
          name: userObj.name,
          email: userObj.email,
        } as IUser,
      });
    } else {
      res.status(500).json({ message: "User already exists" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "User not found" });
  }
}

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

export async function getUserById(req: any, res: any) {
  const userId = req.params.id;

  try {
    const user = await User.findById(userId).exec();
    return res.json({ message: "User created!", data: user });
  } catch {
    res.status(404).json({ message: "User not found" });
  }
}

export async function addUser(req, res) {
  const user = req.body;

  try {
    await User.create(user);
    res
      .status(201)
      .json({ message: "Successfully added a new user!", data: user });
  } catch {
    res.status(500).json({ message: "User not found" });
  }
}

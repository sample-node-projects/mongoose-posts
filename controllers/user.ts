import { User } from "../model/user";

export async function getAllUsers(req: any, res: any) {
  const users = await User.find().exec();
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

import { User } from "../model/user";

export async function getAllUsers(req: any, res: any) {
  const users = await User.find().exec();
  res.json({ message: "Successfully fetched users", data: users });
}

import { Router } from "express";
import { addUser, getAllUsers, getUserById } from "../controllers/user";

const userRouter = Router();

userRouter.get("/all", getAllUsers);

userRouter.post("/add", addUser);

userRouter.get("/:id", getUserById);

export { userRouter };

import mongoose, { Schema } from "mongoose";

export const userSchema = new Schema({
  name: {
    type: Schema.Types.String,
    require: true,
  },
  email: {
    type: Schema.Types.String,
    require: true,
  },
});

export const User = mongoose.model("User", userSchema);

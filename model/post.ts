import mongoose, { Document, Schema } from "mongoose";

export interface IPost extends Document {
  title: string;
  description: string;
  userId: Schema.Types.ObjectId;
}

const postSchema = new Schema({
  title: {
    type: Schema.Types.String,
    require: true,
  },
  description: {
    type: Schema.Types.String,
  },
  userId: {
    type: Schema.Types.ObjectId,
    require: true,
    ref: "User",
  },
});

const Post = mongoose.model<IPost>("Post", postSchema);
export { Post };

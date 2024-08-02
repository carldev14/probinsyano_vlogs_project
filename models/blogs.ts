import mongoose, { Schema } from "mongoose";

const blogsShema = new Schema(
  {
    title: String,
    description: String,
    url: String,
    image: String,
  },
  {
    timestamps: true,
  }
);

const BlogsModels = mongoose.models.blogs || mongoose.model("blogs", blogsShema);
//Export the BlogsModels that I const
export default BlogsModels;
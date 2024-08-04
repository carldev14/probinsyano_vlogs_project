import mongoose, { Schema } from "mongoose";

const blogsShema = new Schema(
  {
    title: String,
    descriptions: String,
    url: String,
    image: String,
    name: String,
  },
  {
    timestamps: true,
  }
);

const BlogsModels = mongoose.models.blogs || mongoose.model("blogs", blogsShema);
//Export the BlogsModels that I const
export default BlogsModels;
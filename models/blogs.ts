import mongoose, { Schema } from "mongoose";

const blogsShema = new Schema(
  {
    title: String,
    descriptions: String,
    url: String,
    image: String,
    name: String,
    slugs: String,
    content_one: String,
    content_two: String,
    layout: String,
    title_step_one: String,
    title_step_two: String,
    image_two: String,
  },
  {
    timestamps: true,
  }
);

const BlogsModels = mongoose.models.blogs || mongoose.model("blogs", blogsShema);
//Export the BlogsModels that I const
export default BlogsModels;
import mongoose, { Schema } from "mongoose";

const blogsShema = new Schema(
  {
    title: String,
    descriptions: String,
    url: String,
    image: String,
    name: String,
    slugs: String,
    layout: String,
    content: String,
    content_one: String,
    content_two: String,
    content_three: String,
    content_four: String,
    content_five: String,
    content_six: String,
    title_step_one: String,
    title_step_two: String,
    title_step_three: String,
    title_step_four: String,
    title_step_five: String,
    title_step_six: String,
    image_two: String,
  },
  {
    timestamps: true,
  }
);

const BlogsModels = mongoose.models.blogs || mongoose.model("blogs", blogsShema);
//Export the BlogsModels that I const
export default BlogsModels;
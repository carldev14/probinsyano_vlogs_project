import mongoose, { Schema } from "mongoose";

const collectionShema = new Schema(
  {
    title: String,
    descriptions: String,
    url: String,
    image: String,
  },
  {
    timestamps: true,
  }
);

const CollectionModels = mongoose.models.collections || mongoose.model("collections", collectionShema);
//Export the CollectionModels that I const
export default CollectionModels;
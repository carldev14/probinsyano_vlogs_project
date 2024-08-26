import mongoose, { Schema } from "mongoose";

const collectionShema = new Schema(
  {
    title: { type: String, required: true },
    descriptions: { type: String, required: true },
    url: { type: String, required: true },
    imageVideo: { type: String, required: true } // Ensure this matches your data
  },
  {
    timestamps: true,
  }
);

const CollectionModels = mongoose.models.collections || mongoose.model("collections", collectionShema);
//Export the CollectionModels that I const
export default CollectionModels;
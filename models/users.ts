import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    number_id: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true,
    },
    //type meaning is for if it admin or not to improves security
    type: String,
  },
  {
    timestamps: true,
  }
);

const Usermodels = mongoose.models.user || mongoose.model("user", userSchema);
//Export the CollectionModels that I const
export default Usermodels;
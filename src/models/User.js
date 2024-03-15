import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
      min: 6,
      max: 20,
    },
    email: {
      type: String,
      require: true,
      max: 50,
    },
    password: {
      type: String,
      require: true,
      min: 6,
    },
    role: {type: mongoose.Types.ObjectId, ref: "Role"}
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);

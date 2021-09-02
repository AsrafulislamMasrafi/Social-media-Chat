const { Schema, model } = require("mongoose");

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    profileImg: String,
    address: String,
    Work: [
      {
        // Todo : Employment after
      },
    ],
    education: [
      {
        // Todo : Employment after
      },
    ],
    language: String,
    followed: String,
    followers: String,
    bio: String,
    about: String,

    User: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);
const User = model("User", UserSchema);

module.exports = User;

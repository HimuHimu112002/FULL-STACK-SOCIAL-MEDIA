const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const UserModel = new Schema({
  FirstName: {
    type: String,
    require: true,
    trim: true, // extra kono space thakle remove kore dibe
    text: true,
  },
  lastName: {
    type: String,
    require: true,
    trim: true,
    text: true,
  },
  UserName: {
    type: String,
    trim: true,
    text: true,
  },
  FullName: {
    type: String,
    trim: true,
    text: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
    trim: true,
    text: true,
  },
  password: {
    type: String,
    require: true,
    trim: true,
    text: true,
  },
  profilePicture: {
    type: String,
    default: "",
  },
  cover: {
    type: String,
    trim: true,
  },
  birthdayMonth: {
    type: String,
    require: true,
    trim: true,
    text: true,
  },
  birthdayDay: {
    type: String,
    require: true,
    trim: true,
    text: true,
  },
  birthdayYear: {
    type: String,
    require: true,
    trim: true,
    text: true,
  },
  gender: {
    type: String,
    enum: ["male", "female", "Others"],
    require: true,
    trim: true,
    text: true,
  },
  relagion: {
    type: String,
    enum: ["Islam", "Himdu", "Others"],
    require: true,
    trim: true,
    text: true,
  },
  friend: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "usermodel",
    },
  ],
  followers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "usermodel",
    },
  ],
  following: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "usermodel",
    },
  ],
  request: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "usermodel",
    },
  ],
  search: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "usermodel",
        require: true,
        text: true,
      },
      createdAt: {
        type: Date,
        require: true,
      },
    },
  ],
  details: {
    bio: {
      type: String,
    },
    othername: {
      type: String,
    },
    job: {
      type: String,
    },
    currentcity: {
      type: String,
    },
    workplace: {
      type: String,
    },
    college: {
      type: String,
    },
    highschool: {
      type: String,
    },
    hometown: {
      type: String,
    },
    relatioship: {
      type: String,
      enum: ["Single", "In a relationship", "Got married"],
    },
    instagram: {
      type: String,
    },
  },
  savePost: [
    {
      post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "post",
      },
      saveAt: {
        type: Date,
      },
    },
  ],
}, {timestamps: true, versionKey: false});
module.exports = mongoose.model('usermodel', UserModel)
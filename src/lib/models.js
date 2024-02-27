
import mongoose, { Schema } from "mongoose";

const shortUrlSchema = new Schema({
  full: {
    type: String,
    required: true,
  },
  short: {
    type: String,
    required: true,
    unique:true,
  },
  clicks: {
    type: Number,
    required: true,
    default: 0,
  },
});

export const ShortUrl = mongoose.models?.ShortUrl || mongoose.model("ShortUrl",shortUrlSchema);
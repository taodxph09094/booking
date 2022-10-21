const mongoose = require("mongoose");
const timeReleaseSchema = new mongoose.Schema({
  film: [
    {
      _id: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
    },
  ],
  cinema: [
    {
      _id: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
    },
  ],
  price: {
    type: String,
    required: [true, "Nhập giá"],
    maxLength: [20, "Giá tối đa 8 ký tự"],
  },
  time: {
    type: String,
    required: [true, "Nhập giá"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("TimeRelease", timeReleaseSchema);

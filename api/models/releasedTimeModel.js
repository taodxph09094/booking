const mongoose = require("mongoose");
const releasedTimeSchema = new mongoose.Schema({
  film: {
    type: String,
    required: [true, "Chọn phim"],
  },
  cinema: {
    type: String,
    required: [true, "Chọn cụm rạp"],
  },
  logoCinema: {
    type: String,
    required: [true, "Nhập link ảnh"],
  },
  poster: {
    type: String,
    required: [true, "Nhập link ảnh"],
  },
  brand: {
    type: String,
    required: [true, "Chọn rạp"],
  },
  address: {
    type: String,
    required: [true, "Nhập địa chỉ"],
  },
  price: {
    type: String,
    required: [true, "Nhập giá"],
  },
  promotion: {
    type: String,
    default: 0,
    maxLength: [3, "Nhập % khuyến mãi"],
  },
  date: {
    type: String,
    required: [true, "Nhập ngày"],
  },
  time: {
    type: String,
    required: [true, "Nhập thời gian"],
  },
  seats: {
    type: String,
    // required: true,
  },
  // seats: [
  //   {
  //     id: {
  //       type: String,
  //       default: 1,
  //     },
  //     number: {
  //       type: String,
  //       default: "A1",
  //     },
  //     isReserved: {
  //       type: Boolean,
  //       default: false,
  //     },
  //     isSelected: {
  //       type: Boolean,
  //       default: false,
  //     },
  //   },
  //   {
  //     id: {
  //       type: String,
  //       default: 1,
  //     },
  //     number: {
  //       type: String,
  //       default: "A1",
  //     },
  //     isReserved: {
  //       type: Boolean,
  //       default: false,
  //     },
  //     isSelected: {
  //       type: Boolean,
  //       default: false,
  //     },
  //   },
  //   {
  //     id: {
  //       type: String,
  //       default: 1,
  //     },
  //     number: {
  //       type: String,
  //       default: "A1",
  //     },
  //     isReserved: {
  //       type: Boolean,
  //       default: false,
  //     },
  //     isSelected: {
  //       type: Boolean,
  //       default: false,
  //     },
  //   },
  //   {
  //     id: {
  //       type: String,
  //       default: 1,
  //     },
  //     number: {
  //       type: String,
  //       default: "A1",
  //     },
  //     isReserved: {
  //       type: Boolean,
  //       default: false,
  //     },
  //     isSelected: {
  //       type: Boolean,
  //       default: false,
  //     },
  //   },
  //   {
  //     id: {
  //       type: String,
  //       default: 1,
  //     },
  //     number: {
  //       type: String,
  //       default: "A1",
  //     },
  //     isReserved: {
  //       type: Boolean,
  //       default: false,
  //     },
  //     isSelected: {
  //       type: Boolean,
  //       default: false,
  //     },
  //   },
  //   {
  //     id: {
  //       type: String,
  //       default: 1,
  //     },
  //     number: {
  //       type: String,
  //       default: "A1",
  //     },
  //     isReserved: {
  //       type: Boolean,
  //       default: false,
  //     },
  //     isSelected: {
  //       type: Boolean,
  //       default: false,
  //     },
  //   },
  //   {
  //     id: {
  //       type: String,
  //       default: 1,
  //     },
  //     number: {
  //       type: String,
  //       default: "A1",
  //     },
  //     isReserved: {
  //       type: Boolean,
  //       default: false,
  //     },
  //     isSelected: {
  //       type: Boolean,
  //       default: false,
  //     },
  //   },
  //   {
  //     id: {
  //       type: String,
  //       default: 1,
  //     },
  //     number: {
  //       type: String,
  //       default: "A1",
  //     },
  //     isReserved: {
  //       type: Boolean,
  //       default: false,
  //     },
  //     isSelected: {
  //       type: Boolean,
  //       default: false,
  //     },
  //   },
  //   {
  //     id: {
  //       type: String,
  //       default: 1,
  //     },
  //     number: {
  //       type: String,
  //       default: "A1",
  //     },
  //     isReserved: {
  //       type: Boolean,
  //       default: false,
  //     },
  //     isSelected: {
  //       type: Boolean,
  //       default: false,
  //     },
  //   },
  //   {
  //     id: {
  //       type: String,
  //       default: 1,
  //     },
  //     number: {
  //       type: String,
  //       default: "A1",
  //     },
  //     isReserved: {
  //       type: Boolean,
  //       default: false,
  //     },
  //     isSelected: {
  //       type: Boolean,
  //       default: false,
  //     },
  //   },
  //   {
  //     id: {
  //       type: String,
  //       default: 1,
  //     },
  //     number: {
  //       type: String,
  //       default: "A1",
  //     },
  //     isReserved: {
  //       type: Boolean,
  //       default: false,
  //     },
  //     isSelected: {
  //       type: Boolean,
  //       default: false,
  //     },
  //   },
  //   {
  //     id: {
  //       type: String,
  //       default: 1,
  //     },
  //     number: {
  //       type: String,
  //       default: "A1",
  //     },
  //     isReserved: {
  //       type: Boolean,
  //       default: false,
  //     },
  //     isSelected: {
  //       type: Boolean,
  //       default: false,
  //     },
  //   },
  //   {
  //     id: {
  //       type: String,
  //       default: 1,
  //     },
  //     number: {
  //       type: String,
  //       default: "A1",
  //     },
  //     isReserved: {
  //       type: Boolean,
  //       default: false,
  //     },
  //     isSelected: {
  //       type: Boolean,
  //       default: false,
  //     },
  //   },
  //   {
  //     id: {
  //       type: String,
  //       default: 1,
  //     },
  //     number: {
  //       type: String,
  //       default: "A1",
  //     },
  //     isReserved: {
  //       type: Boolean,
  //       default: false,
  //     },
  //     isSelected: {
  //       type: Boolean,
  //       default: false,
  //     },
  //   },
  //   {
  //     id: {
  //       type: String,
  //       default: 1,
  //     },
  //     number: {
  //       type: String,
  //       default: "A1",
  //     },
  //     isReserved: {
  //       type: Boolean,
  //       default: false,
  //     },
  //     isSelected: {
  //       type: Boolean,
  //       default: false,
  //     },
  //   },
  //   {
  //     id: {
  //       type: String,
  //       default: 1,
  //     },
  //     number: {
  //       type: String,
  //       default: "A1",
  //     },
  //     isReserved: {
  //       type: Boolean,
  //       default: false,
  //     },
  //     isSelected: {
  //       type: Boolean,
  //       default: false,
  //     },
  //   },
  //   {
  //     id: {
  //       type: String,
  //       default: 1,
  //     },
  //     number: {
  //       type: String,
  //       default: "A1",
  //     },
  //     isReserved: {
  //       type: Boolean,
  //       default: false,
  //     },
  //     isSelected: {
  //       type: Boolean,
  //       default: false,
  //     },
  //   },
  //   {
  //     id: {
  //       type: String,
  //       default: 1,
  //     },
  //     number: {
  //       type: String,
  //       default: "A1",
  //     },
  //     isReserved: {
  //       type: Boolean,
  //       default: false,
  //     },
  //     isSelected: {
  //       type: Boolean,
  //       default: false,
  //     },
  //   },
  //   {
  //     id: {
  //       type: String,
  //       default: 1,
  //     },
  //     number: {
  //       type: String,
  //       default: "A1",
  //     },
  //     isReserved: {
  //       type: Boolean,
  //       default: false,
  //     },
  //     isSelected: {
  //       type: Boolean,
  //       default: false,
  //     },
  //   },
  //   {
  //     id: {
  //       type: String,
  //       default: 1,
  //     },
  //     number: {
  //       type: String,
  //       default: "A1",
  //     },
  //     isReserved: {
  //       type: Boolean,
  //       default: false,
  //     },
  //     isSelected: {
  //       type: Boolean,
  //       default: false,
  //     },
  //   },
  //   {
  //     id: {
  //       type: String,
  //       default: 1,
  //     },
  //     number: {
  //       type: String,
  //       default: "A1",
  //     },
  //     isReserved: {
  //       type: Boolean,
  //       default: false,
  //     },
  //     isSelected: {
  //       type: Boolean,
  //       default: false,
  //     },
  //   },
  //   {
  //     id: {
  //       type: String,
  //       default: 1,
  //     },
  //     number: {
  //       type: String,
  //       default: "A1",
  //     },
  //     isReserved: {
  //       type: Boolean,
  //       default: false,
  //     },
  //     isSelected: {
  //       type: Boolean,
  //       default: false,
  //     },
  //   },
  //   {
  //     id: {
  //       type: String,
  //       default: 1,
  //     },
  //     number: {
  //       type: String,
  //       default: "A1",
  //     },
  //     isReserved: {
  //       type: Boolean,
  //       default: false,
  //     },
  //     isSelected: {
  //       type: Boolean,
  //       default: false,
  //     },
  //   },
  //   {
  //     id: {
  //       type: String,
  //       default: 1,
  //     },
  //     number: {
  //       type: String,
  //       default: "A1",
  //     },
  //     isReserved: {
  //       type: Boolean,
  //       default: false,
  //     },
  //     isSelected: {
  //       type: Boolean,
  //       default: false,
  //     },
  //   },
  //   {
  //     id: {
  //       type: String,
  //       default: 1,
  //     },
  //     number: {
  //       type: String,
  //       default: "A1",
  //     },
  //     isReserved: {
  //       type: Boolean,
  //       default: false,
  //     },
  //     isSelected: {
  //       type: Boolean,
  //       default: false,
  //     },
  //   },
  //   {
  //     id: {
  //       type: String,
  //       default: 1,
  //     },
  //     number: {
  //       type: String,
  //       default: "A1",
  //     },
  //     isReserved: {
  //       type: Boolean,
  //       default: false,
  //     },
  //     isSelected: {
  //       type: Boolean,
  //       default: false,
  //     },
  //   },
  //   {
  //     id: {
  //       type: String,
  //       default: 1,
  //     },
  //     number: {
  //       type: String,
  //       default: "A1",
  //     },
  //     isReserved: {
  //       type: Boolean,
  //       default: false,
  //     },
  //     isSelected: {
  //       type: Boolean,
  //       default: false,
  //     },
  //   },
  //   {
  //     id: {
  //       type: String,
  //       default: 1,
  //     },
  //     number: {
  //       type: String,
  //       default: "A1",
  //     },
  //     isReserved: {
  //       type: Boolean,
  //       default: false,
  //     },
  //     isSelected: {
  //       type: Boolean,
  //       default: false,
  //     },
  //   },
  //   {
  //     id: {
  //       type: String,
  //       default: 1,
  //     },
  //     number: {
  //       type: String,
  //       default: "A1",
  //     },
  //     isReserved: {
  //       type: Boolean,
  //       default: false,
  //     },
  //     isSelected: {
  //       type: Boolean,
  //       default: false,
  //     },
  //   },
  //   {
  //     id: {
  //       type: String,
  //       default: 1,
  //     },
  //     number: {
  //       type: String,
  //       default: "A1",
  //     },
  //     isReserved: {
  //       type: Boolean,
  //       default: false,
  //     },
  //     isSelected: {
  //       type: Boolean,
  //       default: false,
  //     },
  //   },
  //   {
  //     id: {
  //       type: String,
  //       default: 1,
  //     },
  //     number: {
  //       type: String,
  //       default: "A1",
  //     },
  //     isReserved: {
  //       type: Boolean,
  //       default: false,
  //     },
  //     isSelected: {
  //       type: Boolean,
  //       default: false,
  //     },
  //   },
  //   {
  //     id: {
  //       type: String,
  //       default: 1,
  //     },
  //     number: {
  //       type: String,
  //       default: "A1",
  //     },
  //     isReserved: {
  //       type: Boolean,
  //       default: false,
  //     },
  //     isSelected: {
  //       type: Boolean,
  //       default: false,
  //     },
  //   },
  //   {
  //     id: {
  //       type: String,
  //       default: 1,
  //     },
  //     number: {
  //       type: String,
  //       default: "A1",
  //     },
  //     isReserved: {
  //       type: Boolean,
  //       default: false,
  //     },
  //     isSelected: {
  //       type: Boolean,
  //       default: false,
  //     },
  //   },
  //   {
  //     id: {
  //       type: String,
  //       default: 1,
  //     },
  //     number: {
  //       type: String,
  //       default: "A1",
  //     },
  //     isReserved: {
  //       type: Boolean,
  //       default: false,
  //     },
  //     isSelected: {
  //       type: Boolean,
  //       default: false,
  //     },
  //   },
  //   {
  //     id: {
  //       type: String,
  //       default: 1,
  //     },
  //     number: {
  //       type: String,
  //       default: "A1",
  //     },
  //     isReserved: {
  //       type: Boolean,
  //       default: false,
  //     },
  //     isSelected: {
  //       type: Boolean,
  //       default: false,
  //     },
  //   },
  //   {
  //     id: {
  //       type: String,
  //       default: 1,
  //     },
  //     number: {
  //       type: String,
  //       default: "A1",
  //     },
  //     isReserved: {
  //       type: Boolean,
  //       default: false,
  //     },
  //     isSelected: {
  //       type: Boolean,
  //       default: false,
  //     },
  //   },
  //   {
  //     id: {
  //       type: String,
  //       default: 1,
  //     },
  //     number: {
  //       type: String,
  //       default: "A1",
  //     },
  //     isReserved: {
  //       type: Boolean,
  //       default: false,
  //     },
  //     isSelected: {
  //       type: Boolean,
  //       default: false,
  //     },
  //   },
  //   {
  //     id: {
  //       type: String,
  //       default: 1,
  //     },
  //     number: {
  //       type: String,
  //       default: "A1",
  //     },
  //     isReserved: {
  //       type: Boolean,
  //       default: false,
  //     },
  //     isSelected: {
  //       type: Boolean,
  //       default: false,
  //     },
  //   },
  //   {
  //     id: {
  //       type: String,
  //       default: 1,
  //     },
  //     number: {
  //       type: String,
  //       default: "A1",
  //     },
  //     isReserved: {
  //       type: Boolean,
  //       default: false,
  //     },
  //     isSelected: {
  //       type: Boolean,
  //       default: false,
  //     },
  //   },
  //   {
  //     id: {
  //       type: String,
  //       default: 1,
  //     },
  //     number: {
  //       type: String,
  //       default: "A1",
  //     },
  //     isReserved: {
  //       type: Boolean,
  //       default: false,
  //     },
  //     isSelected: {
  //       type: Boolean,
  //       default: false,
  //     },
  //   },
  //   {
  //     id: {
  //       type: String,
  //       default: 1,
  //     },
  //     number: {
  //       type: String,
  //       default: "A1",
  //     },
  //     isReserved: {
  //       type: Boolean,
  //       default: false,
  //     },
  //     isSelected: {
  //       type: Boolean,
  //       default: false,
  //     },
  //   },
  //   {
  //     id: {
  //       type: String,
  //       default: 1,
  //     },
  //     number: {
  //       type: String,
  //       default: "A1",
  //     },
  //     isReserved: {
  //       type: Boolean,
  //       default: false,
  //     },
  //     isSelected: {
  //       type: Boolean,
  //       default: false,
  //     },
  //   },
  //   {
  //     id: {
  //       type: String,
  //       default: 1,
  //     },
  //     number: {
  //       type: String,
  //       default: "A1",
  //     },
  //     isReserved: {
  //       type: Boolean,
  //       default: false,
  //     },
  //     isSelected: {
  //       type: Boolean,
  //       default: false,
  //     },
  //   },
  //   {
  //     id: {
  //       type: String,
  //       default: 1,
  //     },
  //     number: {
  //       type: String,
  //       default: "A1",
  //     },
  //     isReserved: {
  //       type: Boolean,
  //       default: false,
  //     },
  //     isSelected: {
  //       type: Boolean,
  //       default: false,
  //     },
  //   },
  //   {
  //     id: {
  //       type: String,
  //       default: 1,
  //     },
  //     number: {
  //       type: String,
  //       default: "A1",
  //     },
  //     isReserved: {
  //       type: Boolean,
  //       default: false,
  //     },
  //     isSelected: {
  //       type: Boolean,
  //       default: false,
  //     },
  //   },
  //   {
  //     id: {
  //       type: String,
  //       default: 1,
  //     },
  //     number: {
  //       type: String,
  //       default: "A1",
  //     },
  //     isReserved: {
  //       type: Boolean,
  //       default: false,
  //     },
  //     isSelected: {
  //       type: Boolean,
  //       default: false,
  //     },
  //   },
  //   [
  //     { id: 1, number: "A1" },
  //     { id: 2, number: "A2" },
  //     { id: 3, number: "A3" },
  //     { id: 4, number: "A4" },
  //     null,
  //     { id: 5, number: "A5" },
  //     { id: 6, number: "A6" },
  //     { id: 7, number: "A7" },
  //     { id: 8, number: "A8" },
  //     { id: 9, number: "A9", isReserved: true },
  //     null,
  //     { id: 11, number: "A10" },
  //     { id: 12, number: "A11" },
  //     { id: 13, number: "A12" },
  //   ],
  //   [
  //     { id: 14, number: "B1" },
  //     { id: 15, number: "B2" },
  //     { id: 16, number: "B3", isReserved: true },
  //     { id: 17, number: "B4" },
  //     null,
  //     { id: 19, number: "B5" },
  //     { id: 20, number: "B6" },
  //     { id: 21, number: "B7" },
  //     { id: 22, number: "B8" },
  //     { id: 23, number: "B9" },
  //     null,
  //     { id: 25, number: "B10" },
  //     { id: 26, number: "B11" },
  //     { id: 27, number: "B12" },
  //   ],
  //   [
  //     { id: 28, number: "C1" },
  //     { id: 29, number: "C2" },
  //     { id: 30, number: "C3" },
  //     { id: 31, number: "C4" },
  //     null,
  //     { id: 32, number: "C5" },
  //     { id: 33, number: "C6" },
  //     { id: 34, number: "C7", isReserved: true },
  //     { id: 35, number: "C8" },
  //     { id: 36, number: "C9" },
  //     null,
  //     { id: 37, number: "C10" },
  //     { id: 38, number: "C11" },
  //     { id: 39, number: "C12" },
  //   ],
  //   [
  //     { id: 40, number: "D1" },
  //     { id: 41, number: "D2" },
  //     { id: 42, number: "D3" },
  //     { id: 43, number: "D4" },
  //     null,
  //     { id: 44, number: "D5" },
  //     { id: 45, number: "D6" },
  //     { id: 56, number: "D7", isReserved: true },
  //     { id: 47, number: "D8" },
  //     { id: 48, number: "D9" },
  //     null,
  //     { id: 49, number: "D10" },
  //     { id: 50, number: "D11" },
  //     { id: 51, number: "D12" },
  //   ],
  //   [
  //     { id: 52, number: "E1" },
  //     { id: 53, number: "E2" },
  //     { id: 54, number: "E3" },
  //     { id: 55, number: "E4" },
  //     null,
  //     { id: 56, number: "E5" },
  //     { id: 57, number: "E6" },
  //     { id: 58, number: "E7", isReserved: true },
  //     { id: 59, number: "E8" },
  //     { id: 60, number: "E9" },
  //     null,
  //     { id: 61, number: "E10" },
  //     { id: 62, number: "E11" },
  //     { id: 63, number: "E12" },
  //   ],
  // ],
  Stock: {
    type: Number,
    default: 100,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("ReleasedTime", releasedTimeSchema);

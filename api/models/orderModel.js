const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({

  orderItems: [
    {
      nameFilm: {
        type: String,
        required: true,
      },
      nameCinema: {
        type: String,
        required: true,
      },
      date:{
        type: String,
      },
      time: {
        type: String,
      },
      seats: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      promotion: {
        type: Number,
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
      image: {
        type: String,
        required: true,
      },
      ticket: {
        type: mongoose.Schema.ObjectId,
        ref: "ReleasedTime",
        required: true,
      },
    },
  ],
  userId: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
userName:{
  type: String,
    ref: "User",
    required: true,
},
  paymentInfo: {
    id: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
  },
  paidAt: {
    type: Date,
    required: true,
  },
  itemsPrice: {
    type: Number,
    required: true,
    default: 0,
  },
  totalPrice: {
    type: Number,
    required: true,
    default: 0,
  },
  orderStatus: {
    type: String,
    required: true,
    default: "Đang xử lý",
  },
  deliveredAt: Date,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Order", orderSchema);

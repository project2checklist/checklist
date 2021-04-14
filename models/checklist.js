const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemsSchema = new Schema(
  {
    item: { type: String},
    quantity: { type: Number, min: 0, max: 5, default: 1 },
    section: {
      type: String,
      enum: [
        "Essentials",
        "Clothing",
        "Toiletries",
        "Technology",
        "Entertainment",
        "Accessories",
      ],
    },
  },
  {
    timestamps: true,
  }
);

const checklistSchema = new Schema(
  {
    dateOfTrip: {
      type: Date,
    },
    destination: {
      type: String,
    },
    lengthOfStay: {
      type: String,
      //Check out methods for range of dates
    },
    items: [itemsSchema],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Checklist", checklistSchema);

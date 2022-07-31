const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const petSchema = new Schema(
  {
    name: {
      type: String,
      required: ture,
    },
    type: {
      type: String,
      required: ture,
    },
    breed: {
      type: String,
      required: ture,
    },
    age: {
      type: Number,
      required: ture,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Pet", petSchema);

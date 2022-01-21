const mongoose = require("mongoose");

const Schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  details: {
    type: String,
  },
});

const Item = mongoose.model("item", Schema);

module.exports = Item;

const mongoose = require("mongoose");

const databaseConnection = (url) => {
  mongoose.connect(url, {});
};

module.exports = databaseConnection;

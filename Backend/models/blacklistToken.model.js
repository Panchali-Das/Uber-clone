/*const mongoose = require("mongoose");

const blacklistTokenSchema = new mongoose.Schema({
  token: {
    type: String,
    required: true,
    unique: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 86400, // 24 hours in seconds
  },
});


module.exports = mongoose.model("BlacklistToken", blacklistTokenSchema);*/

const mongoose = require("mongoose");

const blackListTokenSchema = new mongoose.Schema({
  token: { type: String, required: true },
  createdAt: { type: Date, default: Date.now, expires: "7d" },
});

// Use existing model if already defined
const BlacklistToken =
  mongoose.models.BlacklistToken ||
  mongoose.model("BlacklistToken", blackListTokenSchema);

module.exports = BlacklistToken;

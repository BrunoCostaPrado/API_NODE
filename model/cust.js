const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const custSchema = new Schema({
  custFirstName: {
    type: String,
    require: true,
    unique: true,
  },
  CustLastName: {
    type: String,
    require: true,
    unique: true,
  },
});
const Cust = mongoose.model("cust", custSchema);
module.exports = Cust;

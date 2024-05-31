const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  userId: { type: String , required: true , unique: true },
  mobileNo:{type: Number , required: true , unique: true},
  des: {type: String, required: true }


});



const UserModel = mongoose.model("users" , userSchema)
module.exports = UserModel
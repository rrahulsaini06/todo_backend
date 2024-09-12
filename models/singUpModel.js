const mongoose = require("mongoose");
const singUpSchema = new mongoose.Schema({
  name: { type: String, required: true },
  userId: { type: String , required: true , unique: true },
  mobileNo:{type: Number , required: true , unique: true},
  des: {type: String, required: true },
  email:{type: String, required : true , unique: true},
  password:{type: String , required : true , unique: true},

});



const SingUpModel = mongoose.model("singUp" , singUpSchema)
module.exports = SingUpModel
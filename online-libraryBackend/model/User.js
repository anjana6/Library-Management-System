const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  Fname: {
    type: String,
    required: true
  },
  Lname: {
    type: String,
    required: true
  },
  nic: {
    type: String,
    required: true
  },
  studentNo:{
    type:String,
    required:true
  },
  email: {
    type: String,
    required: true
  },
  telNo:{
    type: Number
  },
  mobileNo:{
    type:Number
  },
  password:{
      type:String,
      required:true
  }
});

module.exports = mongoose.model("User",UserSchema);

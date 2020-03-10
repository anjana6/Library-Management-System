const mongoose = require('mongoose');

const AdminSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  nic: {
    type: String,
    required: true
  },
  mobileNo:{
    type: String,
    required:true
  },
  password:{
      type:String,
      required:true
  }
});

module.exports = mongoose.model("Adimin",AdminSchema);

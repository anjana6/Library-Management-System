const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  Fname: {
    type: String,
    require: true
  },
  Lname: {
    type: String,
    require: true
  },
  nic: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true
  },
  password:{
      type:String,
      require:true
  }
});

module.exports = mongoose.model("User",UserSchema);

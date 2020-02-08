const mongoose = require('mongoose');

const SelectingBookSchema = new mongoose.Schema({
    studentNo:{
        type:String,
        required:true
    },
    bookId:{
        type:String,
        required:true
    },
    givenDate:{
        type:Date
    },
    returnedDate:{
        type:Date
    }
})

module.exports = mongoose.model("SelectingBooks",SelectingBookSchema);
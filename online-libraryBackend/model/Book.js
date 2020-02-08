const mongoose = require('mongoose');

const BooksSchema = new mongoose.Schema({
    bookId:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    autherName:{
        type:String,
        required:true
    },
    quentity:{
        type:Number
    },
    cost:{
        type:Number,
        required:true
    },
    description:{
        type:String
    },
    numberOfBooks:{
        type:Number,
        required:true
    }
})

module.exports = mongoose.model("Books",BooksSchema);
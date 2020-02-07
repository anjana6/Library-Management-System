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
    }
})

module.exports = mongoose.model("Books",BooksSchema);
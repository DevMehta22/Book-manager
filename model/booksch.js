const mongoose = require('mongoose')

const booksch = new mongoose.Schema({
    book_name:{
        type:String,
        required:true

    },
    date_of_issue:{
        type:Date,
        default:Date.now()
    }
    
})

module.exports = mongoose.model("books",booksch)



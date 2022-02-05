const mongoose = require('mongoose');

const classSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
        trim: true,
        min:3,
        max:20
    },
    service:{
        type: String,
        required: true
    },
    class_by:{
        type: String,
        required: true
    },
    image:{
        type: String
    }
},{timestamps:true});

module.exports = mongoose.model('Class',classSchema);
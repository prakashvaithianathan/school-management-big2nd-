const mongoose = require('mongoose');

const teacherSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    qualification:{
        type: String,
        required: true
    },
    experience:{
        type: Number,
        required: true
    },
    contact:{
        type: Number,
        required: true
    }
})

const teacherModel = mongoose.model('teachers',teacherSchema);

module.exports = teacherModel;
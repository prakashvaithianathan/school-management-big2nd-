const mongoose = require('mongoose');

const studentSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    enrollmentDate:{
        type: Date,
        required: true
    },
    className:{
        type: mongoose.Types.ObjectId,
        required:true,
        ref:'classes'
    },
    classTeacher:{
        type: mongoose.Types.ObjectId,
        required: true,
        ref:'teachers'
    },
    address:{
        type:String,
        required: true
    },
    contact:{
        type:Number,
        required: true
    }
})

const studentModel = mongoose.model('students',studentSchema);

module.exports = studentModel
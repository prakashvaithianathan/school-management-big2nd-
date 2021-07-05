const mongoose = require('mongoose');

const classSchema = mongoose.Schema({
    students:[
        {
            type:mongoose.Types.ObjectId,
            // required:true,
            ref:'students'
        }
    ],
    teacher:{
        type:mongoose.Types.ObjectId,
        required:true,
        ref:'teachers'
    },
    className:{
        type:String,
        required:true
    }
})

const classModel = mongoose.model('classes',classSchema);
module.exports = classModel
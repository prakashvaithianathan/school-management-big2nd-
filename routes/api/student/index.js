const router = require('express').Router();
const studentModel = require('../../../models').studentModel
const classModel = require('../../../models').classModel

router.get('/',(req, res) => {
    res.send('this is student route')
})


router.post('/add',async(req, res) => {
    try {
        const student= new studentModel(req.body)
        const session = await studentModel.startSession();
        const studentDetails = await student.save({session:session});

        const classDetails = await classModel.findByIdAndUpdate(
            {_id:req.body.className},
            {
                $push:{students:student._id}
            },
            {new:true}
        )
        res.json({student: studentDetails,class:classDetails})
    } catch (error) {
        res.json({message: error.message})
    }
})

router.get('/find',async(req, res) => {
    try {
        const find = await studentModel.find({}).populate({path:'className',select:'className -_id'}).populate({path:'classTeacher',select:'name contact -_id'}).select('name -_id ')
        res.json(find)
    } catch (error) {
        res.json({message:error.message})
    }
})
module.exports = router;
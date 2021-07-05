const router = require('express').Router();
const classModel = require('../../../models').classModel

router.get('/',(req, res) => {
    res.send('this is class route')
})

router.post('/add',async(req, res) => {
    try {
        const classes = new classModel(req.body)
    const save = await classes.save();
    res.json({message:'class successfully added'})
    } catch (error) {
        res.json({message:error.message})
    }
})


router.get('/find',async(req, res) => {
    try {
        const find = await classModel.find({}).populate({path:'students',select:'name enrollmentDate -_id'}).populate({path:'teacher',select:'name -_id experience'}).select('-_id className')
        res.json(find)
        // res.json({message:'sa'})
    } catch (error) {
        res.json({message:error.message})
        // res.json({message:'sa'})
    }
})
module.exports= router;
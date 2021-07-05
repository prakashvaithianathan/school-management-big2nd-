const router = require('express').Router();
const teacherModel = require('../../../models').teacherModel

router.get('/',(req, res) =>{
    res.send('this is teacher route')
})


router.post('/add',async(req, res)=>{
    try {
        const teacher = new teacherModel(req.body)
        const save = await teacher.save();
        res.json({message:'teacher successfully added'})
    } catch (error) {
       res.json({message:error.message}) 
    }
})

module.exports = router;
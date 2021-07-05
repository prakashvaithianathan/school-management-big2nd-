const router = require('express').Router()

const teacher = require('./teacher')
const student = require('./student')
const classes = require('./class')

router.use('/teacher',teacher)
router.use('/student',student)
router.use('/class',classes)

module.exports = router
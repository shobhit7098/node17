const express = require('express');
const StudentController = require('../controllers/studentscontroller');
const router = express();

router.post('/add/user',(req,res)=>{
        StudentController.addStudent(req , res )
})
router.get('/users',(req, res)=>{
        StudentController.getStudents(req,res);
})
router.get('/users/:rollNo',(req, res)=>{
        StudentController.getStudentsByRollNo(req,res);
})
module.exports = router
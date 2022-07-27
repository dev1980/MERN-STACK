const express = require('express');
const Course = require("../models/course");
const router = express.Router();

//get all the courses

router.get("/", async(req, res)=>{

    try{
        const courses = await Course.find();
        res.json(courses)
    }
    catch(err) {
        res.json(err)
    }
const courses = Course.find();
})

//get single course
router.get("/:courseId", async(req, res)=>{
    const id =  req.params.courseId;
    try {
        const data = await Course.findById(id)
        res.send(data)
    }
    catch(err) {
        res.json(err)
    }
    })
    
// create course
router.post("/", async(req, res)=>{

    try {
        const course =await Course.create(req.body)
        res.json(course)
    }
    catch(err) {
        res.json(err)
    }
    })

// update course

// delete course
module.exports = router;
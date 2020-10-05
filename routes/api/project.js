const express = require("express");
const asyncHandler = require("express-async-handler");
const {Project} = require('../../db/models');

const router = express.Router();

// To get your tasks
router.get('/', asyncHandler( async(req,res)=>{
    const {userId} = req.body;
    const projects = await Project.findAll({were:{userId:userId}});
    res.json(projects);
}));

// To create your task
router.post('/', asyncHandler(async (req,res)=>{
    const {userId,name, description} = req.body;
    let newProject = await Project.create({userId:userId, name:name, description:description});
    res.json(newProject);
}))

// To delete your project
// ToDo set up propper id handling
router.delete('/:id', asyncHandler( async (req,res)=>{
    const {projectId} = req.body;
    await Project.delete({where:{id:projectId}}); // place Holder.
}))

module.exports = router;
